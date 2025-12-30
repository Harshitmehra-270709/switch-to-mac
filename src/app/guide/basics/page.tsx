import { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { BasicsContent } from "@/components/guide/BasicsContent";

export const metadata: Metadata = {
    title: "The Basics: Windows vs Mac Concepts",
    description: "Master the Mac interface. Learn how Finder differs from Explorer, map Control Panel to System Settings, and understand the 'Mental Shift'.",
    openGraph: {
        title: "The Basics: Windows vs Mac Concepts",
        description: "Don't get lost in Finder. A visual dictionary for Windows users.",
    },
};

export default function BasicsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
            "@type": "Question",
            "name": "What is the Control Panel equivalent on Mac?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "It is called System Settings (or System Preferences on older macOS versions). It looks more like iPhone settings."
            }
        }, {
            "@type": "Question",
            "name": "How do I right click on a Mac?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Click with two fingers on the trackpad, or hold the Control key while clicking."
            }
        }]
    };

    return (
        <>
            <JsonLd data={jsonLd} />
            <BasicsContent />
        </>
    );
}
