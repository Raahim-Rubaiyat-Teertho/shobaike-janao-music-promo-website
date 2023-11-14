export default function AudienceLogin() {
    document.title = "Login | Audience"
    return (
        <>
            <div className="flex items-center flex-col text-center justify-center min-h-screen min-w-screen bg-gradient-to-t from-blue-100 via-blue-200 to-blue-300">
                <div className="container border-2 border-text-shade w-fit p-7 rounded-lg">
                <h1 className="font-medium text-3xl font-serif tracking-tight text-text-shade">Login</h1>

                <div className="form-part font-serif">
                    <form className="flex items-center flex-col text-center justify-center pt-6">
                        <input type="email" placeholder="Enter your email" className="text-center m-3 p-1 bg-inherit placeholder:text-text-shade border-2 border-b-text-shade border-t-0 border-l-0 border-r-0"/>
                        <input type="password" placeholder="Enter your password" className="text-center m-3 p-1 bg-inherit placeholder:text-text-shade border-2 border-b-text-shade border-t-0 border-l-0 border-r-0"/>
                        <button className="px-2 py-1 w-20 border-2 rounded-md border-text-shade text-center hover:text-white hover:bg-text-shade mt-4">Submit</button>
                    </form>
                </div>
                </div>
            </div>
        </>
    )
}