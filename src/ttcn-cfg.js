
const code = `[MODULE_PARAMETERS]
# This section shall contain the values of all parameters that are defined in your TTCN-3 modules.

[LOGGING]
# In this section you can specify the name of the log file and the classes of events
# you want to log into the file or display on console (standard error).

LogFile := "logs/%e.%h-%r.%s"
FileMask := LOG_ALL | DEBUG | MATCHING
ConsoleMask := ERROR | WARNING | TESTCASE | STATISTICS | PORTEVENT

LogSourceInfo := Yes
AppendFile := No
TimeStampFormat := DateTime
LogEventTypes := Yes
SourceInfoFormat := Single
LogEntityName := Yes

[TESTPORT_PARAMETERS]
# In this section you can specify parameters that are passed to Test Ports.

[DEFINE]
# In this section you can create macro definitions,
# that can be used in other configuration file sections except [INCLUDE].

[INCLUDE]
# To use configuration settings given in other configuration files,
# the configuration files just need to be listed in this section, with their full or relative pathnames.

[EXTERNAL_COMMANDS]
# This section can define external commands (shell scripts) to be executed by the ETS
# whenever a control part or test case is started or terminated.

BeginTestCase := ""
EndTestCase := ""
BeginControlPart := ""
EndControlPart := ""

[EXECUTE]
# In this section you can specify what parts of your test suite you want to execute.

[GROUPS]
# In this section you can specify groups of hosts. These groups can be used inside the
# [COMPONENTS] section to restrict the creation of certain PTCs to a given set of hosts.

[COMPONENTS]
# This section consists of rules restricting the location of created PTCs.

[MAIN_CONTROLLER]
# The options herein control the behavior of MC.

TCPPort := 0
KillTimer := 10.0
NumHCs := 0
LocalAddress :=
`;

export default code;
