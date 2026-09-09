/**
 * ==========================================================================
 *        CENTRAL CONFIGURATION - EDITORIAL SPLIT-SCREEN SCREEN
 * ==========================================================================
 * Edit your server identity, official links, audio playlist, changelogs,
 * and component variables.
 */

window.ZyraConfig = {
    // 1. Server Branding Identity
    branding: {
        serverName: "ZYRA CORP",
        logoUrl: "assets/logo.png", // Reroute to your logo path if needed
        serverSubtitle: "EDITORIAL EDITION",
        claim: "ZYRA CORPORATION",
        description: "The ultimate destination for premium FiveM roleplay resources. Experience optimized luxury gameplay."
    },

    // 2. Default Enabled / Disabled Components
    components: {
        enableSocials: true,             // Show official socials
        enableMusic: true,               // Show mini player
        enableNews: true,                // Show timeline updates
        enableBackgroundVideo: false,    // Show looping video background
        enableParticles: true            // Enable smooth star dust particles
    },

    // 3. Official Links
    socials: [
        { name: "Discord", url: "https://discord.gg/zyra" },
        { name: "Website", url: "https://zyrastore.com" },
        { name: "YouTube", url: "https://youtube.com/zyra" }
    ],

    // 4. Music Playlist
    music: {
        defaultVolume: 0.15,
        playlist: [
            { 
                title: "Shadows of the City", 
                artist: "Neon Syndicate", 
                url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
            },
            { 
                title: "Whispers of the Street", 
                artist: "Midnight Vibe", 
                url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" 
            },
            { 
                title: "Echoes of Roleplay", 
                artist: "Retro Wave", 
                url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" 
            }
        ]
    },

    // 5. Server News / Changelogs
    news: [
        {
            type: "update",
            date: "19 JUL 2026",
            title: "Clandestine Lab Discovery",
            description: "Unconfirmed reports point to a new hidden narcotics manufacturing facility in the north. Law enforcement is dispatching units."
        },
        {
            type: "evento",
            date: "15 JUL 2026",
            title: "15 Custom Cars Imported",
            description: "The luxury import car dealer has restocked 15 state-of-the-art vehicles with custom handling vectors."
        }
    ],

    // 6. Useful Server Key Shortcuts
    controls: [
        { key: "F1", description: "Mobile Device" },
        { key: "F2", description: "Storage Box" },
        { key: "F3", description: "Gestures Panel" },
        { key: "K", description: "Seatbelt Toggle" }
    ],

    // 7. Ambient Background Variables
    background: {
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-abstract-dark-ink-swirling-background-43093-large.mp4",
        videoOpacity: 0.25,
        particleCount: 80,
        particleSpeed: 0.45
    },

    // 8. Connection Status Log Phrases
    loading: {
        musicTipText: "PRESS SPACE TO PLAY/PAUSE MUSIC",
        phases: [
            { progress: 0, text: "Initializing database connection sequence..." },
            { progress: 20, text: "Downloading system files and interface assets..." },
            { progress: 50, text: "Compiling custom assets and vehicle handling configurations..." },
            { progress: 80, text: "Synchronizing player environment vectors with server host..." },
            { progress: 100, text: "Ready. Access granted." }
        ]
    },

    // 9. Global Accent Styling Theme (Bronze Gold)
    theme: {
        colorPrimary: "#030303",
        colorSecondary: "#080808",
        colorAccent: "#dfba5f",
        colorTextPrimary: "#fcfcfc",
        colorTextSecondary: "#a1a1aa",
        colorTextMuted: "#4e4e52",
        colorBorder: "rgba(255, 255, 255, 0.03)",
        colorBorderActive: "rgba(223, 186, 95, 0.4)",
        blurIntensity: "14px"
    },

    typography: {
        fontFamily: "'Inter', sans-serif",
        fontSizeBase: "16px"
    }
};
