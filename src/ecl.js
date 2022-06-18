const code = `F0 := IMDB.File_actors;
CountActors := RECORD
F0.ActorName;
UNSIGNED C := COUNT(GROUP);
END;
MoviesIn := TABLE(F0,CountActors,ActorName);
OUTPUT(TOPN(MoviesIn,100,-C));
`;

 export default code;