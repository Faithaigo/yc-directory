
const Page = async({params}:{params:Promise<{id:string}>}) =>{
    const id = (await params).id
    return <div>Details={id}</div>
}
export default Page