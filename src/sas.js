
const code = `libname foo "/tmp/foobar";
%let count=1;

/* Multi line
Comment
*/
data _null_;
    x=ranuni();
    * single comment;
    x2=x**2;
    sx=sqrt(x);
    if x=x2 then put "x must be 1";
    else do;
        put x=;
    end;
run;

/* embedded comment
* comment;
*/

proc glm data=sashelp.class;
    class sex;
    model weight = height sex;
run;

proc sql;
    select count(*)
    from sashelp.class;

    create table foo as
    select * from sashelp.class;

    select *
    from foo;
quit;
`;

export default code;
