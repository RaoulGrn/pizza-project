import CreateUser from '../features/user/CreateUser'

function Home() {
    return (
        <div className="my-10 text-center">
            <h1 className="mb-8 text-xl font-semibold">
                The best pizza.
                <br />
                <span className="text-teal-500">
                    {' '}
                    Straight out of the oven, directly to you.
                </span>
            </h1>

            <CreateUser />
        </div>
    )
}

export default Home
