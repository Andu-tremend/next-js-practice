const queryFactory = (APIqueryKey: string, APIqueryValue: string) => {
  let queries = []
  if ( APIqueryValue !== "undefined") {
    queries.push({
      key: APIqueryKey,
      value: APIqueryValue
    }) 
  }  
  return queries
}

export default queryFactory