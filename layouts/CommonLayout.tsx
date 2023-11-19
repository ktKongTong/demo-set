

export default function DashboardLayout(
    {children}: {children: React.ReactNode}
){
    return (
        <section className="relative mx-auto max-w-screen-xl px-4 py-10 md:flex md:flex-row md:py-10 center">
            
            {children}
        </section>
    )
}