export default async function Post({ params }) {

    const id = (await params).id

    return (
        <div>
            <h1>{id}</h1>
        </div>
    )
}
