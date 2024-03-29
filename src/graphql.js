const code = `# GraphQL Schema Definition Language

"""
Color value
"""
scalar Color

"""
Node interface

- allows (re)fetch arbitrary entity only by ID
- allows client side cache normalization

See [Relay Global Object Identification Specification](https://facebook.github.io/relay/graphql/objectidentification.htm)
"""
interface Node {
  """
  Globally unique identifier,
  typically \`\${__typename}:\${dbId}\`
  may be encoded in *base64*
  """
  id: ID!
}

"""
A character in the Star Wars Trilogy
"""
interface Character {
  """
  The id of the character.
  """
  id: ID!

  """
  The name of the character.
  """
  name: String

  """
  The friends of the character, or an empty list if they have none.
  """
  friends: [Character]

  """
  Which movies they appear in
  """
  appearsIn: [Episode]

  """
  All secrets about their past
  """
  secretBackstory: String
}

"""
A mechanical creature in the Star Wars universe.
"""
type Droid implements Character {
  """
  The id of the droid.
  """
  id: ID!

  """
  The name of the droid.
  """
  name: String

  """
  The friends of the droid, or an empty list if they have none.
  """
  friends: [Character]

  """
  Which movies they appear in.
  """
  appearsIn: [Episode]

  """
  Construction date and the name of the designer.
  """
  secretBackstory: String

  """
  The primary function of the droid.
  """
  primaryFunction: String

  """
  Chase color of the droid.
  """
  color: Color
}

# One of the films in the Star Wars Trilogy
enum Episode {
  """
  Released in 1977.
  """
  NEWHOPE

  """
  Released in 1980.
  """
  EMPIRE

  """
  Released in 1983.
  """
  JEDI
}

"""
A humanoid creature in the Star Wars universe.
"""
type Human implements Character {
  """
  The id of the human.
  """
  id: ID!

  """
  The name of the human.
  """
  name: String

  """
  The friends of the human, or an empty list if they have none.
  """
  friends: [Character]

  """
  Which movies they appear in.
  """
  appearsIn: [Episode]

  """
  The home planet of the human, or null if unknown.
  """
  homePlanet: String

  """
  Where are they from and how they came to be who they are.
  """
  secretBackstory: String
}

enum LengthUnit {
  METER
  FEET
}

type Starship {
  id: ID!
  name: String!
  length(unit: LengthUnit = METER): Float
}

union SearchResult = Human | Droid | Starship

input SearchInput {
  name: String
  episode: Episode
}

"""
Root Query
"""
type Query {
  """
  Return the hero by episode.
  """
  hero(
    """
    If omitted, returns the hero of the whole saga. If provided, returns the hero of that particular episode.
    """
    episode: Episode
  ): Character

  """
  Return the Human by ID.
  """
  human(
    """
    id of the human
    """
    id: ID!
  ): Human

  """
  Return the Droid by ID.
  """
  droid(
    """
    id of the droid
    """
    id: ID!
  ): Droid

  """
  Search everything by name

  __NOTE__: You should use Relay pagination
  """
  search(search: SearchInput!): [SearchResult]
    @deprecated(reason: "\`search\` will be replaced.")
}

"""
Root Mutation
"""
type Mutation {
  """
  Save the favorite episode.
  """
  favorite(
    """
    Favorite episode.
    """
    episode: Episode!
  ): Episode
}

"""
Subscriptions — live events
"""
type Subscription {
  """
  Message
  """
  message: String
}

extend type Query {
  """
  Dummy query for highlighting test
  """
  dummy(
    int: Int = 123
    float: Float = 123.456
    str: String = "Hello World!"
    boolDefaultTrue: Boolean = true
    boolDefaultFalse: Boolean = false
    id: ID
    search: SearchInput = null
  ): Boolean
}

schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}

# GraphQL Query Language

query dummyQuery($int: Int) {
  dummy(int: $int)
}

mutation favoriteEpisode($episode: Episode) {
  favorite(episode: $episode)
}
`;

 export default code;