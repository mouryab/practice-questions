// using callbacks

function loginUser(email, password, callback) {
	setTimeout(() => {
		console.log('Now we have the data');
		callback({ userEmail : email});
	}, 2000);
}

function getUserVideos(email, callback) {
	setTimeout(() => {
		callback(['video1', 'video2', 'video3']);
	}, 1000);	
}

function videoDetails(video, callback) {
	setTimeout(() => {
		callback('title of the video');
	}, 1000);	
}

const user = loginUser('test@testl.com', 123456, user => {
	console.log(user);
	getUserVideos(user.userEmail, (videos) => {
		console.log(videos);
		videoDetails(videos[0], title => {
			console.log(title);
		})
	})
})


console.log('Finish');

// Using Promises

function loginUser(email, password,) {
	return new Promise((resolve, reject) => { 
		setTimeout(() => {
			console.log('Now we have the data');
			resolve({ userEmail : email});
		}, 2000);
	});	
}

function getUserVideos(email) {
	return new Promise((resolve, reject) => { 
		setTimeout(() => {
			resolve(['video1', 'video2', 'video3']);
		}, 1000);
	});		
}

function videoDetails(video) {
	return new Promise((resolve, reject) => { 
		setTimeout(() => {
			resolve('title of the video');
		}, 1000);	
	});	
}

loginUser('test@testl.com', 123456)
	.then(user => getUserVideos(user.email) )
	.then(videos =>  videoDetails(videos[0]) )
	.then(detail => console.log(detail));


	/// note this does not work as expected
	// loginUser('test@testl.com', 123456)
	// .then(user => { console.log(user); getUserVideos(user.email); })
	// .then(videos => { console.log(videos); videoDetails(videos[0]); })
	// .then(detail => console.log(detail));

// multiple promises

const yt = new Promise(resolve =>  {
	setTimeout(() => {
		console.log('getting stuff from youtube');
		resolve({ videos: [1,2,3,4,5] });
	}, 3000);
});

const fb = new Promise(resolve =>  {
	setTimeout(() => {
		console.log('getting stuff from fb');
		resolve({ user: "Name of the video" });
	}, 2000);
});

Promise.all([yt, fb])
	.then(result => console.log(result));

// using async and await

function loginUser(email, password,) {
	return new Promise((resolve, reject) => { 
		setTimeout(() => {
			console.log('Now we have the data');
			resolve({ userEmail : email});
		}, 2000);
	});	
}

function getUserVideos(email) {
	return new Promise((resolve, reject) => { 
		setTimeout(() => {
			resolve(['video1', 'video2', 'video3']);
		}, 1000);
	});		
}

function videoDetails(video) {
	return new Promise((resolve, reject) => { 
		setTimeout(() => {
			resolve('title of the video');
		}, 1000);	
	});	
}

async function loginUserDetails() {
	try {
		const user = await loginUser('test@testl.com', 123456);
		console.log(user);
		const videos = await getUserVideos(user.email);
		console.log(videos); 
		const detail = await videoDetails(videos[0]);
		console.log(detail);
	} catch (err) {
		console.log("error in getting videos")
	}
	
}

loginUserDetails();