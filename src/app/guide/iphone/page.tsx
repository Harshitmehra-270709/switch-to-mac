
import { Metadata } from "next";
import { IPhoneContent } from "@/components/guide/iPhoneContent";

export const metadata: Metadata = {
    title: "Android to iPhone: The Master Class",
    description: "A complete zero-to-hero guide for switching to iPhone. Migration, Gestures, Settings, and Ecosystem mastery in 5 minutes.",
    openGraph: {
        title: "Android to iPhone: The Master Class",
        description: "Don't lose your data. Master iOS in 5 minutes.",
    },
};

export default function iPhonePage() {
    return <IPhoneContent />;
}
