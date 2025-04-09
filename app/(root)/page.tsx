import SearchForm from "../../components/SearchForm";

export default async function Home({searchParams}:{
  searchParams:Promise<{query?:string}>
}) {

  const query =  (await searchParams).query

  const posts = [{
    _createdAt:"Yesterday",
    views:55,
    author:{
      _id:1,
    },
    _id:1,
     description:"This is a description",
     image:"https://picsum.photos/seed/picsum/200/300",
     caategory:"Robots",
     title:"We Robots"
  }]
  return (
      <>
      <section className="pink_container pattern">
        <h1 className="heading">Pitch your Startup, <br/> Connect with entrepreneurs</h1>
        <p className="sub-heading max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query}/>
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}`:"All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts.length > 0 ? (
            posts.map(post=>(
              <div key={post._id}>{post._createdAt}</div>
            )) 
          ):(<p className="no-results">No startups found</p>)}
        </ul>
      </section>
      </>
  );
}
