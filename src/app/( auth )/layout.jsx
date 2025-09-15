export default function AuthLayout ({children}) {
    return(
        <div className="flex items-center justify-center min-h-screen bg-slate-100 dark:bg-slate-900">
            <main> {children} </main>
        </div>
    )
}