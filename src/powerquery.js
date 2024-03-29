const code = `let
    Source = Excel.CurrentWorkbook(){[Name="Table1"]}[Content],
    SplitColumnDelimiter = Table.SplitColumn(Source,"Input",Splitter.SplitTextByDelimiter(","),13),
    Unpivot = Table.Unpivot(SplitColumnDelimiter,{"Input.1", "Input.2", "Input.3", "Input.4",
    "Input.5", "Input.6",    "Input.7", "Input.8", "Input.9", "Input.10", "Input.11", "Input.12"
    ,  "Input.13"},"Attribute","Value"),
    RemovedColumns = Table.RemoveColumns(Unpivot,{"Attribute"}),
    DuplicatesRemoved = Table.Distinct(RemovedColumns),
    GroupedRows = Table.Group(DuplicatesRemoved, {"RowID"}, {{"Count of Distinct Values"
    , each Table.RowCount(_), type number}})
in
    GroupedRows`;

 export default code;