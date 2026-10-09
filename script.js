// 获取页面上所有的 audio 元素
const allAudio = document.querySelectorAll('audio');

// 遍历每一个 audio 元素，给它们绑定播放事件
allAudio.forEach(currentAudio => {
    currentAudio.addEventListener('play', () => {
        // 当这首歌开始播放时，遍历其他所有歌曲
        allAudio.forEach(otherAudio => {
            // 如果不是当前正在播放的这首，就暂停它
            if (otherAudio !== currentAudio) {
                otherAudio.pause();
            }
        });
        
        console.log("Micu Realy 的音乐开始播放了！");
    });
});