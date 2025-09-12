// Load header and footer
document.addEventListener('DOMContentLoaded', function() {
    // Load header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });

    // Load footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });

    // Load tools on homepage
    loadTools();
});

// Tools data
const tools = [
    {
        id: 1,
        name: "YouTube Thumbnail Downloader",
        description: "Download high-quality thumbnails from YouTube videos",
        category: "Social Media Tools",
        icon: "fas fa-image",
        link: "tools/youtube-thumbnail.html"
    },
    {
        id: 2,
        name: "YouTube Video Downloader",
        description: "Download YouTube videos without watermark in various formats",
        category: "Social Media Tools",
        icon: "fas fa-video",
        link: "tools/youtube-video-downloader.html"
    },
    {
        id: 3,
        name: "YouTube Audio Downloader",
        description: "Extract and download audio from YouTube videos",
        category: "Social Media Tools",
        icon: "fas fa-music",
        link: "tools/youtube-audio-downloader.html"
    },
    {
        id: 4,
        name: "Instagram Downloader",
        description: "Download photos and reels from Instagram",
        category: "Social Media Tools",
        icon: "fab fa-instagram",
        link: "tools/instagram-downloader.html"
    },
    {
        id: 5,
        name: "Twitter Video Downloader",
        description: "Download videos from Twitter without watermark",
        category: "Social Media Tools",
        icon: "fab fa-twitter",
        link: "tools/twitter-downloader.html"
    },
    {
        id: 6,
        name: "Facebook Video Downloader",
        description: "Download videos from Facebook",
        category: "Social Media Tools",
        icon: "fab fa-facebook",
        link: "tools/facebook-downloader.html"
    },
    {
        id: 7,
        name: "TikTok Video Downloader",
        description: "Download videos from TikTok without watermark",
        category: "Social Media Tools",
        icon: "fab fa-tiktok",
        link: "tools/tiktok-downloader.html"
    },
    {
        id: 8,
        name: "YouTube Tags Extractor",
        description: "Extract tags from YouTube videos for SEO",
        category: "Social Media Tools",
        icon: "fas fa-tags",
        link: "tools/youtube-tags-extractor.html"
    },
    {
        id: 9,
        name: "Hashtag Generator",
        description: "Generate relevant hashtags for your social media posts",
        category: "Social Media Tools",
        icon: "fas fa-hashtag",
        link: "tools/hashtag-generator.html"
    },
    {
        id: 10,
        name: "Social Media Post Generator",
        description: "Create engaging posts for different social media platforms",
        category: "Social Media Tools",
        icon: "fas fa-comment",
        link: "tools/social-media-post-generator.html"
    }
];

// Load tools on homepage
function loadTools() {
    const toolsGrid = document.getElementById('toolsGrid');
    if (!toolsGrid) return;
    
    let toolsHTML = '';
    
    tools.forEach(tool => {
        toolsHTML += `
            <div class="col-md-4 mb-4 tool-item">
                <div class="card tool-card">
                    <div class="card-body text-center">
                        <div class="tool-icon">
                            <i class="${tool.icon}"></i>
                        </div>
                        <h5 class="card-title">${tool.name}</h5>
                        <p class="card-text">${tool.description}</p>
                        <a href="${tool.link}" class="btn btn-primary">Use Tool</a>
                    </div>
                </div>
            </div>
        `;
    });
    
    toolsGrid.innerHTML = toolsHTML;
}

// Search tools
function searchTools() {
    const searchTerm = document.getElementById('toolSearch').value.toLowerCase();
    filterTools(searchTerm);
}

function searchToolsFromNav() {
    const searchTerm = document.getElementById('navSearch').value.toLowerCase();
    filterTools(searchTerm);
}

function filterTools(searchTerm) {
    const toolItems = document.querySelectorAll('.tool-item');
    
    toolItems.forEach(item => {
        const toolName = item.querySelector('.card-title').textContent.toLowerCase();
        const toolDesc = item.querySelector('.card-text').textContent.toLowerCase();
        
        if (toolName.includes(searchTerm) || toolDesc.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
