var links = {
	coursera: {
		title: 'Coursera.org',
		url: 'https://www.coursera.org'
	},
	udemy: {
		title: 'Udemy.com',
		url: 'https://www.udemy.com'
	},
	linkedin: {
		title: 'LinkedIn',
		url: 'https://www.linkedin.com'
	}
};

var data =[
	{
		id: 1,
		name: 'DL Specialization 5c',
		img: 'https://image.ibb.co/guiHeK/co_dl_ai_5c_r.png',
		cert: 'https://www.coursera.org/account/accomplishments/specialization/certificate/VXQVE9RBSJMM',
		auth: 'coursera'
	},
	{
		id: 2,
		name: 'ANN',
		img: 'https://image.ibb.co/njxAzK/co_nn_r.png',
		cert: 'https://www.coursera.org/account/accomplishments/verify/4UXHWHH52J6C',
		cert_d: 'https://www.dropbox.com/s/52ye7isbtxshggy/DeepLearning-Cert1.pdf?dl=0',
		auth: 'coursera'
	},
	{
		id: 3,
		name: 'CNN',
		img: 'https://image.ibb.co/mdbg6z/co_cnn_r.png',
		cert: 'https://www.coursera.org/account/accomplishments/verify/B8L27V9F4CZ7',
		cert_d: 'https://www.dropbox.com/s/m7d2g6sd3tl4b9o/DeepLearning-Cert4.pdf?dl=0',
		auth: 'coursera'
	},
	{
		id: 4,
		name: 'RNN',
		img: 'https://image.ibb.co/dZ4ete/co_rnn_r.png',
		cert: 'https://www.coursera.org/account/accomplishments/verify/9TF9EHFJA3FA',
		cert_d: 'https://www.dropbox.com/s/53tq185u9zn9vlp/DeepLearning-Cert5.pdf?dl=0',
		auth: 'coursera'
	},
	{
		id: 5,
		name: 'Hyperparameters',
		img: 'https://image.ibb.co/hWszte/co_hyp_r.png',
		cert: 'https://www.coursera.org/account/accomplishments/verify/6KSMDKGURUUH',
		cert_d: 'https://www.dropbox.com/s/87fh1loywzngft3/DeepLearning-Cert2.pdf?dl=0',
		auth: 'coursera'
	},
	{
		id: 6,
		name: 'Structure MLP',
		img: 'https://image.ibb.co/hdcXDe/co_st_mlp_r.png',
		cert: 'https://www.coursera.org/account/accomplishments/verify/VFBYKLNQJNX7',
		cert_d: 'https://www.dropbox.com/s/qq6aqg79hrqjhp9/DeepLearning-Cert3.pdf?dl=0', 
		auth: 'coursera'
	},
	{
		id: 7,
		name: 'Keras',
		img: 'https://image.ibb.co/dp9CDe/ud_nv_keras_r.png',
		cert: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-T3V1KPI1.pdf',
		auth: 'udemy'
	},
	{
		id: 8,
		name: 'Tensorflow GCP',
		img: 'https://image.ibb.co/eDL8mz/ud_nv_tf_gcp_r.png',
		cert: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-J0JFW6H4.pdf',
		auth: 'udemy'
	},
	{
		id: 9,
		name: 'Master OpenCV3',
		img: 'https://image.ibb.co/hLzCDe/ud_nv_cv3_r.png',
		cert: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-QRE3L73S.pdf',
		auth: 'udemy'
	},
	{
		id: 10,
		name: 'Advanced CV',
		img: 'https://image.ibb.co/nb9ZRz/ud_nv_adv_cv_r.png',
		cert: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-QRE3L73S.pdf',
		auth: 'udemy'
	},
	{
		id: 11,
		name: 'OpenCV SSD GAN',
		img: 'https://image.ibb.co/cuNAzK/ud_nv_cv_ssd_r.png',
		cert: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-V19MMFGI.pdf',
		auth: 'udemy'
	},
	{
		id: 12,
		name: 'Advanced NLP',
		img: 'https://image.ibb.co/bzpqzK/ud_nv_adv_nlp_r.png',
		cert: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-8W0MQ5ID.pdf',
		auth: 'udemy'
	},
	{
		id: 13,
		name: 'Basic NLP',
		img: 'https://image.ibb.co/d8fKte/ud_nv_nlp_r.png',
		cert: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-YLEX4XZQ.pdf',
		auth: 'udemy'
	},
	{
		id: 14,
		name: 'Data Visualization',
		img: 'https://image.ibb.co/eTv8mz/ud_vs_dviz_r.png',
		cert: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-6M4TNS3K.pdf',
		auth: 'udemy'
	},
	{
		id: 15,
		name: 'React Redux',
		img: 'https://image.ibb.co/ddGQYe/ud_vs_react_r.png',
		cert: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-9W101OPA.pdf',
		auth: 'udemy'
	},
	{
		id: 16,
		name: 'Webpack',
		img: 'https://image.ibb.co/eGG3KK/ud_vs_webpack_r.png',
		cert: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-HF0UYJU6.pdf',
		auth: 'udemy'
	},
	{
		id: 17,
		name: 'Saas & SCSS',
		img: 'https://image.ibb.co/j6EjRz/ud_vs_saas_r.png',
		cert: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-M8ALUK84.pdf',
		auth: 'udemy'
	},
	{
		id: 18,
		name: 'CSS Flex Linkedin',
		img: 'https://image.ibb.co/dTsMPK/rsz_1linkedin.jpg',
		cert: 'https://www.dropbox.com/s/qo7hd6hcrackpcr/CertificateOfCompletion_Advanced%20Responsive%20Layouts%20With%20Css%20Flexbox.pdf?dl=0',
		auth: 'linkedin'
	},
];

function run() {
	for(var i = 0; i < data.length; i++) {
		var cards = document.getElementById('cards');
		var article = document.createElement('article')
		article.setAttribute('class', 'card');
		var a = document.createElement('a');
		a.setAttribute('href', data[i].cert);
		var picture = document.createElement('picture');
		picture.setAttribute('class', 'thumbnail');
		var img = document.createElement('img');
		img.setAttribute('src', data[i].img);

		var title = document.createElement('div');
		title.setAttribute('class', 'card-content');
		var spanLabel = document.createElement('span');
		spanLabel.innerHTML = 'Certification Authority: ';
		spanLabel.setAttribute('class', 'title-label');
		var aLink = document.createElement('a');
		aLink.setAttribute('href', links[data[i].auth].url);
		aLink.setAttribute('class', 'title-value');
		aLink.innerHTML = links[data[i].auth].title;

		title.appendChild(spanLabel);
		title.appendChild(aLink);
		picture.appendChild(img);
		a.appendChild(picture);
		article.appendChild(a);
		article.appendChild(title)
		cards.appendChild(article);
	}
}

window.onload = run;