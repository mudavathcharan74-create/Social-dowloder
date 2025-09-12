// YouTube Thumbnail Downloader functionality
function getThumbnails() {
    const youtubeUrl = document.getElementById('youtubeUrl').value;
    
    // Basic validation
    if (!youtubeUrl) {
        alert('Please enter a YouTube URL');
        return;
    }
    
    // Show loading
    document.getElementById('loading').style.display = 'block';
    document.getElementById('resultContainer').style.display = 'none';
    
    // Extract video ID from URL
    const videoId = extractVideoId(youtubeUrl);
    
    if (!videoId) {
        alert('Invalid YouTube URL. Please check and try again.');
        document.getElementById('loading').style.display = 'none';
        return;
    }
    
    // Simulate processing (in a real application, this would be an API call)
    setTimeout(() => {
        displayThumbnails(videoId);
        document.getElementById('loading').style.display = 'none';
        document.getElementById('resultContainer').style.display = 'block';
    }, 1500);
}

function extractVideoId(url) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : false;
}

function displayThumbnails(videoId) {
    const thumbnailsList = document.getElementById('thumbnailsList');
    const baseUrl = 'https://img.youtube.com/vi/';
    
    const qualities = [
        { name: 'Maximum Resolution', code: 'maxresdefault', label: 'HD' },
        { name: 'High Quality', code: 'hqdefault', label: 'High' },
        { name: 'Medium Quality', code: 'mqdefault', label: 'Medium' },
        { name: 'Standard Quality', code: 'sddefault', label: 'Standard' }
    ];
    
    let thumbnailsHTML = '';
    
    qualities.forEach(quality => {
        const thumbnailUrl = `${baseUrl}${videoId}/${quality.code}.jpg`;
        
        thumbnailsHTML += `
            <div class="col-md-3 col-sm-6 mb-4">
                <div class="card">
                    <img src="${thumbnailUrl}" class="card-img-top" alt="YouTube Thumbnail">
                    <div class="card-body">
                        <h5 class="card-title">${quality.name}</h5>
                        <p class="card-text">${quality.label} Quality</p>
                        <a href="${thumbnailUrl}" download="youtube-thumbnail-${videoId}-${quality.code}.jpg" class="btn btn-primary btn-sm">
                            <i class="fas fa-download me-1"></i> Download
                        </a>
                    </div>
                </div>
            </div>
        `;
    });
    
    thumbnailsList.innerHTML = thumbnailsHTML;
}
