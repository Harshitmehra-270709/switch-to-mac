export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-black text-white py-20 px-8">
            <div className="max-w-3xl mx-auto space-y-12">
                <header>
                    <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-gray-400">Last updated: December 31, 2025</p>
                </header>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold">1. Introduction</h2>
                    <p className="opacity-80 leading-relaxed">
                        Welcome to Switch to Mac. We respect your privacy and are committed to protecting your personal data.
                        This privacy policy will inform you as to how we look after your personal data when you visit our website
                        (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold">2. The Data We Collect</h2>
                    <p className="opacity-80 leading-relaxed">
                        We use <strong>Vercel Analytics</strong> to collect anonymous usage data. This helps us understand how
                        visitors interact with our guide so we can improve it.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 opacity-80">
                        <li>We do <strong>not</strong> collect personally identifiable information (PII) like your name, email, or address.</li>
                        <li>We do <strong>not</strong> use cookies to track you across other websites.</li>
                        <li>We track aggregate metrics such as page views, visitor countries, and referral sources.</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold">3. Local Storage</h2>
                    <p className="opacity-80 leading-relaxed">
                        This website uses your browser's Local Storage to save your preferences, specifically:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 opacity-80">
                        <li>Your progress through the guide (e.g., "Mark as Complete").</li>
                        <li>Your preferred "Level" (Beginner/Intermediate/Advanced) in the Learning Pipeline.</li>
                    </ul>
                    <p className="opacity-80 leading-relaxed mt-4">
                        This data stays on your device and is never sent to our servers.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold">4. Third-Party Links</h2>
                    <p className="opacity-80 leading-relaxed">
                        This website includes links to third-party applications (e.g., Rectangle, AltTab, Homebrew).
                        Clicking on those links may allow third parties to collect or share data about you.
                        We do not control these third-party websites and are not responsible for their privacy statements.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold">5. Contact Us</h2>
                    <p className="opacity-80 leading-relaxed">
                        If you have any questions about this privacy policy, please contact us via our GitHub repository issues page.
                    </p>
                </section>
            </div>
        </div>
    );
}
