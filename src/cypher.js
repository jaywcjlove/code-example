
const code = `// Cypher Mode for CodeMirror, using the neo theme
MATCH (joe { name: 'Joe' })-[:knows*2..2]-(friend_of_friend)
WHERE NOT (joe)-[:knows]-(friend_of_friend)
RETURN friend_of_friend.name, COUNT(*)
ORDER BY COUNT(*) DESC , friend_of_friend.name

`;

export default code;
