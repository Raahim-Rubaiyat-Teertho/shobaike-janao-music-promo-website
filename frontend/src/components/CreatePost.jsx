export default function CreatePost() {
    return (
        <div>
            <div className="w-full mt-5 px-24">
                <form className="flex flex-col">
                    <textarea name="create-post" id="create-post" cols="30" rows="5" className="resize-none mt-5 w-full shadow-md border-2 rounded-lg border-text-shade placeholder:font-robot font-light p-2" placeholder="Create a post..."></textarea>
                    <div className="btn flex justify-end">
                        <button className="mt-5 mr-2 px-2 py-1 border-2 border-text-shade rounded-md w-20 font-robot hover:bg-text-shade hover:text-white">Post</button>
                    </div>
                </form>
            </div>
        </div>
    )
}