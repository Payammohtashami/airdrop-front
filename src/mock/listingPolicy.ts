import { Airdrop, ContractAudit, DEXCEX, Investors, News, Partners, SocialMedia, Team, Website, Whitepaper } from "@/components/Icon/listingPolicy";


export interface listingPolicyItemsPropsType {
    id: number,
    title: string,
    detail: string,
    theme: string,
    icon: any
};

export const listingPolicyItems: listingPolicyItemsPropsType[] = [
    {
        id: 1,
        title: "Website",
        detail: "Necessary security measures and certificates are verified on the website.",
        icon: Website,
        theme: "rgba(132, 220, 198, 0.05)",
    },
    {
        id: 2,
        title: "Social Media",
        detail: "Shares and activity on social media are verified. ",
        icon: SocialMedia,
        theme: "rgba(147, 129, 255, 0.05)",
    },
    {
        id: 3,
        title: "DEX-CEX",
        detail: "The DEX-CEXs that are listed and will be listed are verified.",
        icon: DEXCEX,
        theme: "rgba(255, 104, 107, 0.05)",
    },
    {
        id: 4,
        title: "Investors",
        detail: "Investors and their investment amounts are verified.",
        icon: Investors,
        theme: "rgba(147, 129, 255, 0.05)",
    },
    {
        id: 5,
        title: "Whitepaper",
        detail: "The whitepaper is reviewed and analyzed. The roadmap is verified.",
        icon: Whitepaper,
        theme: "rgba(246, 203, 43, 0.05)",
    },
    {
        id: 6,
        title: "News",
        detail: "Published popular news is analyzed and verified.",
        icon: News,
        theme: "rgba(132, 220, 198, 0.05)",
    },
    {
        id: 7,
        title: "Partners",
        detail: "Partner organizations and individuals are verified.",
        icon: Partners,
        theme: "rgba(16, 181, 220, 0.05)",
    },
    {
        id: 8,
        title: "Contract Audit",
        detail: "Contract is verified for correct delivery of airdrops.",
        icon: ContractAudit,
        theme: "rgba(147, 129, 255, 0.05)",
    },
    {
        id: 9,
        title: "Team",
        detail: "A meeting with the team is set up and identity verified.",
        icon: Team,
        theme: "rgba(255, 104, 107, 0.05)",
    },
    {
        id: 10,
        title: "Airdrop.io Review",
        detail: "All details are reviewed and approved by our own team.",
        icon: Airdrop,
        theme: "rgba(12, 176, 157, 0.05)",
    },
];


