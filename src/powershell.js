const code = `$SelectedObjectNames=@();
$XenCenterNodeSelected = 0;
#the object info array contains hashmaps, each of which represent a parameter set and describe a target in the XenCenter resource list
foreach($parameterSet in $ObjInfoArray)
{
  if ($parameterSet["class"] -eq "blank")
  {
    #When the XenCenter node is selected a parameter set is created for each of your connected servers with the class and objUuid keys marked as blank
    if ($XenCenterNodeSelected)
    {
      continue
    }
    $XenCenterNodeSelected = 1;
    $SelectedObjectNames += "XenCenter"
  }
  elseif ($parameterSet["sessionRef"] -eq "null")
  {
    #When a disconnected server is selected there is no session information, we get null for everything except class
  }
    $SelectedObjectNames += "a disconnected server"
  else
  {
    Connect-XenServer -url $parameterSet["url"] -opaqueref $parameterSet["sessionRef"]
    #Use $class to determine which server objects to get
    #-properties allows us to filter the results to just include the selected object
    $exp = "Get-XenServer:{0} -properties @{{uuid='{1}'}}" -f $parameterSet["class"], $parameterSet["objUuid"]
    $obj = Invoke-Expression $exp
    $SelectedObjectNames += $obj.name_label;
  } 
}`;

 export default code;