
const code = `## Velocity Code Demo
#*
   based on PL/SQL mode by Peter Raganitsch, adapted to Velocity by Steve O'Hara ( http://www.pivotal-solutions.co.uk )
   August 2011
*#

#*
   This is a multiline comment.
   This is the second line
*#

#[[ hello steve
   This has invalid syntax that would normally need "poor man's escaping" like:

   #define()

   \${blah
]]#

#include( "disclaimer.txt" "opinion.txt" )
#include( $foo $bar )

#parse( "lecorbusier.vm" )
#parse( $foo )

#evaluate( 'string with VTL #if(true)will be displayed#end' )

#define( $hello ) Hello $who #end #set( $who = "World!") $hello ## displays Hello World!

#foreach( $customer in $customerList )

    $foreach.count $customer.Name

    #if( $foo == \${bar})
        it's true!
        #break
    #{else}
        it's not!
        #stop
    #end

    #if ($foreach.parent.hasNext)
        $velocityCount
    #end
#end

$someObject.getValues("this is a string split
        across lines")

$someObject("This plus $something in the middle").method(7567).property

#set($something = "Parseable string with '$quotes'!")

#macro( tablerows $color $somelist )
    #foreach( $something in $somelist )
        <tr><td bgcolor=$color>$something</td></tr>
        <tr><td bgcolor=$color>$bodyContent</td></tr>
    #end
#end

#tablerows("red" ["dadsdf","dsa"])
#@tablerows("red" ["dadsdf","dsa"]) some body content #end

   Variable reference: #set( $monkey = $bill )
   String literal: #set( $monkey.Friend = 'monica' )
   Property reference: #set( $monkey.Blame = $whitehouse.Leak )
   Method reference: #set( $monkey.Plan = $spindoctor.weave($web) )
   Number literal: #set( $monkey.Number = 123 )
   Range operator: #set( $monkey.Numbers = [1..3] )
   Object list: #set( $monkey.Say = ["Not", $my, "fault"] )
   Object map: #set( $monkey.Map = {"banana" : "good", "roast beef" : "bad"})

The RHS can also be a simple arithmetic expression, such as:
Addition: #set( $value = $foo + 1 )
   Subtraction: #set( $value = $bar - 1 )
   Multiplication: #set( $value = $foo * $bar )
   Division: #set( $value = $foo / $bar )
   Remainder: #set( $value = $foo % $bar )


`;

export default code;