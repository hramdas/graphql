# Schema
```
const typeDefs = `
  type Book {
    id:ID
    title: String
    author: String
  }
  type Customer {
    customerId:ID
    name: String!
    email: String
    contact: String
    status: StatusType!
  }
  
  type Query {
    books: [Book]
    book : Book
    customers: [Customer]
  }
  enum StatusType {
    Active
    Inactive
  }
`;
```
# Queries
```
{
  hero {
    name
    # Queries can have comments!
    friends {
      name
    }
  }
}
```
## Queries with Arguments
```
{
  human(id: "1000") {
    name
    height
  }
}

query Book {
  customers(limit:2, offset:0) {
    id:customerId
    name
    email
    contact
    status
  }
  
}

```
## Aliases
```
{
  empireHero: hero(episode: EMPIRE) {
    name
  }
  jediHero: hero(episode: JEDI) {
    name
  }
}
```

## Fragment
```
{
  leftComparison: hero(episode: EMPIRE) {
    ...comparisonFields
  }
  rightComparison: hero(episode: JEDI) {
    ...comparisonFields
  }
}

fragment comparisonFields on Character {
  name
  appearsIn
  friends {
    name
  }
}
```
## Operation name
```
query HeroNameAndFriends {
  hero {
    name
    friends {
      name
    }
  }
}
```

```
query Book {
  customers {
    id:customerId
    name
    status

  }
}

```
