const { src, dest } = require('gulp');

// 這個任務將圖標文件從節點文件夾複製到dist目錄
function buildIcons() {
	return src('./nodes/**/*.{png,svg}')
		.pipe(dest('dist/nodes'));
}

exports['build:icons'] = buildIcons; 