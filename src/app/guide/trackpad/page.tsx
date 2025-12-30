import { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { TrackpadContent } from "@/components/guide/TrackpadContent";

export const metadata: Metadata = {
    title: "Trackpad Mastery: Gestures & Settings",
    description: "Learn essential Mac trackpad gestures with interactive animations. Fix scroll direction, master three-finger drag, and boost productivity.",
    openGraph: {
        title: "Trackpad Mastery: Interactive Guide",
        description: "Visual animations for every Mac gesture. Stop struggling with the trackpad.",
    },
};

export default function TrackpadPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Master Mac Trackpad Gestures",
        "description": "A visual guide to essential macOS trackpad gestures for new users.",
        "step": [
            {
                "@type": "HowToStep",
                "name": "Scroll Direction",
                "text": "Swipe with two fingers to scroll. 'Natural' scrolling moves content like paper."
            },
            {
                "@type": "HowToStep",
                "name": "Zoom In/Out",
                "text": "Pinch with two fingers to zoom in or out of photos and web pages."
            },
            {
                "@type": "HowToStep",
                "name": "Mission Control",
                "text": "Swipe up with three fingers to see all open windows."
            }
        ]
    };

    return (
        <>
            <JsonLd data={jsonLd} />
            <TrackpadContent />
        </>
    );
}
