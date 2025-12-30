import { Sidebar } from "@/components/layout/Sidebar";

export default function GuideLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-black text-white">
            <Sidebar />
            <main className="flex-1 px-4 py-8 md:p-12 max-w-5xl mx-auto w-full">
                {children}
            </main>
        </div>
    );
}
