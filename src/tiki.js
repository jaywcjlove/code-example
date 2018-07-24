
const code = `Headings
!Header 1
!!Header 2
!!!Header 3
!!!!Header 4
!!!!!Header 5
!!!!!!Header 6

Styling
-=titlebar=-
^^ Box on multi
lines
of content^^
__bold__
''italic''
===underline===
::center::
--Line Through--

Operators
~np~No parse~/np~

Link
[link|desc|nocache]

Wiki
((Wiki))
((Wiki|desc))
((Wiki|desc|timeout))

Table
||row1 col1|row1 col2|row1 col3
row2 col1|row2 col2|row2 col3
row3 col1|row3 col2|row3 col3||

Lists:
*bla
**bla-1
++continue-bla-1
***bla-2
++continue-bla-1
*bla
+continue-bla
#bla
** tra-la-la
+continue-bla
#bla

Plugin (standard):
{PLUGIN(attr="my attr")}
Plugin Body
{PLUGIN}

Plugin (inline):
{plugin attr="my attr"}

`;

export default code;
