/* =============================================
   PANORAMIC LEARNING â€” Showcase JS
   ============================================= */

// ---- Header scroll effect ----
const header = document.getElementById('site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

// ---- Mobile nav toggle ----
const hamburger = document.getElementById('hamburger');
const mainNav   = document.getElementById('main-nav');
if (hamburger && mainNav) {
  hamburger.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
  });
  // Close on nav link click
  mainNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mainNav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });
}

// ---- Language switcher ----
const langBtn = document.getElementById('lang-switch');
if (langBtn) {
  langBtn.addEventListener('click', () => {
    const currentFile = window.location.pathname.split('/').pop();
    if (currentFile === 'index-nl.html') {
      window.location.href = 'index.html';
    } else {
      window.location.href = 'index-nl.html';
    }
  });
}

// ---- Testimonials data ----
const TESTIMONIALS_DATA = [
  { initials: 'GP', name: 'G.P.', text: `I recommend Judith and the Panoramic Learning teachers to anyone who wants to learn Dutch. After trying different companies and teachers, my husband and I agree they are the best. We really appreciate their effective and practical methodology.` },
  { initials: 'LL', name: 'L.L.', text: `My husband and I have had an exceptional experience learning Dutch with Panoramic Learning. The lessons have been engaging and well-structured. What set our tutor apart for us, is the fact that he has been genuinely interested in getting to know us and our interests, like he is on this journey of moving to the Netherlands with us. We really liked how well-rounded the sessions feel and how much he shared his Dutch heritage and knowledge with us. The atmosphere has always been very supportive where one feels comfortable making mistakes and asking questions. As we are working from B1 towards our B2 goal, I can't imagine doing it with a different learning partner other than Panoramic Learning.` },
  { initials: 'GN', name: 'G.N.', text: `Thank you Judith and Panoramic Learning. You have helped me get to the B1 level with patience and true professionalism. I would recommend Panoramic Learning for their great one on one learning and excellent teachers.` },
  { initials: 'IJ', name: 'I. J-R.', text: `Thank you, Judith and our tutor for helping me and my wife obtain our A2 Dutch certification. The lessons have been well-structured, thorough, and we are enjoying learning more every week. We look forward to working towards B2 next!` },
  { initials: 'AS', name: 'A.S.', text: `I highly recommend Judith Siemers and her team at Panoramic Learning. Judith helped me reach Dutch A2 level through structured, personalized online lessons. It was an excellent experience - engaging, effective, and tailored to my needs. Thank you, Judith!` },
  { initials: 'AJ', name: 'A.J. W.', text: `After taking a second language course with Panoramic Learning, I managed to raise my Dutch language level to B2! A year on and I still cannot recommend them enough. The lessons from B1 to B2 were challenging, personalized and focused on communication skills for both everyday and complex language use. Special thanks to our tutor for her clear explanations and expert guidance. Her approach enabled me to notice progress in my language proficiency almost every week.` },
  { initials: 'TM', name: 'T.M.', text: `I had a great experience with the lessons. It is amazing and well organized especially for a busy professional. The course gives a lot of background on the culture. The lectures have good relationship building and recommendations to learn. My wife and I got A2 certification, and I am eager to learn more as due to this amazing experience. Thank you to Judith for providing this opportunity to me and my wife. This also goes with a good approach and reviews to advance to the next levels.` },
  { initials: 'HW', name: 'H. v.W.', text: `I successfully completed an in-depth Dutch course at Panoramic Learning, where I had the privilege of working with an exceptional teacher. She was incredibly patient and skilled at breaking down complex words and concepts, which made the learning process much more accessible. Her guidance was instrumental in improving my sentence structure, especially given the initial challenges I faced. I am truly grateful for the support and expertise of Panoramic Learning!` },
  { initials: 'JV', name: 'J.V.', text: `Panoramic Learning made my Dutch lessons such a fun, informative and helpful experience! I highly underestimated what a big of an impact Panoramic Learning could make in my journey learning Dutch! Dankjewel!` },
  { initials: 'DK', name: 'D.K.', text: `Thanks to Panoramic Learning I was able to get to a point where I could fully understand a conversation without need to grab my phone and google what does this word mean. I can converse with people feeling confident. Without all the support and time from Panoramic Learning this would never have been possible. I would invite anyone to join the group and contact Judith if you are serious about learning Dutch.` },
  { initials: 'CH', name: 'C. v.H.', text: `I started in March 2024 and in 6 months I got my A2 level. My instructor was so patient, it almost felt she became part of my household as she was part of my life every week. Judith and her team are very professional, they make Dutch easier in a fun way, and the curriculum is very good. I can recommend Panoramic Learning!` },
  { initials: 'MH', name: 'M. v.H.', text: `Judith and her team came highly recommended from a family member, and that recommendation was spot on! Learning a new language seemed to be a daunting and difficult thing to do. But each week bit by bit, it has been made much easier, rewarding and fun thanks to Judith and our tutor. Their structure, guidance, professionalism and understanding makes the world's difference. At Panoramic Learning I am not just another number, we have fun, we laugh at the mistakes and we celebrate the wins. The lessons are tailored to our skill level and particular needs within a proven framework that incrementally builds your knowledge and command of the Dutch Language. My husband and I started lessons twice a week and within 5 months built our foundation and completed A2 level. We look forward to completing B1 and B2 and with Panoramic Learning I am confident we will succeed!` },
  { initials: 'HH', name: 'H.H.', text: `I started with Panoramic Learning in January 2023 and have been with them ever since. The instructors were knowledgeable, patient, and always encouraging. I was amazed at how quickly I progressed, thanks to their well-structured curriculum and interactive approach. Whether you're a beginner or looking to polish your skills, Panoramic Learning is the way to go. I can't recommend them enough for anyone wanting to learn Dutch in a fun and supportive environment.` },
  { initials: 'BT', name: 'B.T.', text: `Fantastic course, lovely trainer. We had a wonderful time learning Dutch under Judith and our tutor. We have learned so much, for which we are very grateful.` },
  { initials: 'CS', name: 'C.S.', text: `Judith alongside her hand-picked team of Dutch experts has been vital to my progress and accomplishments within the language. In under 2 years the team at Panoramic Learning was able to raise my non-existent Dutch skill to a B2 level where I passed my exams with flying colors! I cannot recommend Panoramic Learning enough; the one-on-one tutoring ensures a degree of high quality and understanding of the language you are trying to learn!` },
  { initials: 'MV', name: 'M.V.', text: `I recently wrote the Dutch B1 exams. Judith and my assigned tutor made this process a lot easier. Definitely a great place to learn Dutch.` },
  { initials: 'JB', name: 'J. v.d.B.', text: `Judith and her team from Panoramic Learning are 100% dedicated to giving you the best Dutch learning experience possible. They take frequent feedback and make the necessary adjustments to ensure the way you are learning suits your style. They are dedicated to holding you accountable for your homework and practicing your Dutch which I greatly appreciate. Judith is a caring and meticulous teacher and it is always a pleasure to have a conversation with her in Dutch. Both mine and my wife's experience with Panoramic Learning has been nothing but pleasant and effective.` },
  { initials: 'ID', name: 'I. D.R.', text: `Absolutely thrilled with the Dutch teaching services provided by Judith and her fantastic team! Their dedication and willingness to assist make them stand out. I highly recommend them to anyone in need of top-notch Dutch instructors.` },
  { initials: 'PN', name: 'P.N.', text: `Learning Dutch was not a simple task. I am grateful to Judith and the Panoramic Learning team for all their efforts. The tutors have a unique understanding of the challenges with learning new languages and really offer helpful advice on ways forward. From where I started to where I am, I highly recommend Panoramic Learning.` },
  { initials: 'RZ', name: 'R. v.Z.', text: `I highly recommend Panoramic Learning for the ultimate experience in learning Dutch. Judith and her team are extremely dedicated to the success of their students. I cannot thank you enough for guiding me in the journey of obtaining my B1.` },
  { initials: 'DC', name: 'D.C.', text: `Panoramic Learning tutors are not just Dutch teachers, but more like coaches for the whole Dutch experience. They are just optimistic and realistic enough to ensure that you learn the language well. It is a safe-fail environment where you can learn so that you don't end up failing your state exam. Thanks Judith Siemers, our tutor and Panoramic Learning. Thanks to you I have my B2!` },
  { initials: 'AR', name: 'A.R.', text: `I have just achieved my B2 level thanks to Panoramic Learning. Over the course of six months, I completed around 25 lessons with this institute, and I can honestly say that I am extremely satisfied with the results I achieved. What I particularly appreciated about Panoramic Learning was the flexibility and personalized approach. Even though we used a course book, it was not followed rigidly. The lessons were tailored to my needs, and at times we skipped topics that did not directly contribute to my personal learning goals. This made the course truly customized, and I felt well supported in my individual learning journey. Additionally, I had the opportunity to work with different teachers, such as Judith and our tutor. This variety allowed me to hear different accents and challenge myself in understanding different language variations. I cannot emphasize enough how strongly I recommend Panoramic Learning to anyone who wants to learn Dutch. The combination of flexibility, tailored lessons, and the opportunity to work with a variety of teachers makes this institute truly outstanding. Thanks to them, I have achieved my language goals and significantly increased my confidence in Dutch. Thank you very much, Panoramic Learning!` },
  { initials: 'CD', name: 'C.D.', text: `Judith and her team equipped me and my wife with excellent Dutch communication skills not only for our B1 tests, but for life in the Netherlands in general. The lessons are fun, interactive, and the concepts are solidified by practical application and practice. We have not only passed our B1 exams with ease, but we are also comfortable in speaking and writing Dutch in our everyday lives. Panoramic Learning is highly recommended for anyone who wants to learn Dutch in a proper way that not only enables you to pass the exams but enables you to communicate effectively at the office and in public. Many thanks to Judith and our tutor for making this a wonderful experience for us both!` },
  { initials: 'SK', name: 'S.K.', text: `I have had the pleasure of being taught Dutch by Judith for almost a year now. When I started I had just a few weeks to get to my A2 level and write my civic integration tests. Judith not only equipped me with the skills and capacities to get through those tests, but also to pass all, with mostly 100%. I enjoyed the learning process with Judith so much that I decided to continue with the lessons. I am now working towards B1 and feeling so much more confident speaking in public. I literally feel the growth in my speaking, writing, reading and understanding of Dutch with each week. Thank you Judith - you have made my life in Amsterdam so much better and I feel way more integrated.` },
  { initials: 'DJ', name: 'D.J.', text: `Judith and her team at Panoramic Learning have provided my partner and myself with an exceptional (and ongoing) Dutch education. They really do go the extra mile, making sure that you understand the concepts and rules associated with a language as well as providing useful tips to make the learning process feel less cumbersome. Learning another language is quite a challenge, but Panoramic Learning make it feel less daunting and more exciting. Our tutors have been outstanding and extremely well informed. We have just completed B1 and plan to continue and complete B2 with Panoramic Learning. Thank you Panoramic Learning!` },
  { initials: 'PT', name: 'P.T.', text: `You will not find a more engaged, invested and caring group of people for your Dutch learning journey than Judith and her wonderful team at Panoramic Learning. We have felt so supported and our classes have been fun and productive. We have just achieved our A2 level proficiency and are looking forward to achieving our B1 level. Thank you so much!` },
  { initials: 'MB', name: 'M.B.', text: `Judith and her team really helped my Dutch proficiency reach new heights. Judith is energetic, always supportive of even the smallest progress and she assisted me in becoming confident in my B1 Dutch course. Our B1 tutor is such a breath of fresh air and we had loads of good laughs! We loved completing this course with Panoramic Learning - Thank you Judith! We would recommend Panoramic Learning to anyone looking to learn Dutch in a fun and interactive manner.` },
  { initials: 'KT', name: 'K. d.T.', text: `The Panoramic Learning team helped us take our Dutch to the next level! Panoramic Learning is centered around speaking but with all the appropriate supporting grammar to back it up. We always felt we received special attention and that our best interests were at heart. It was a special time in our lives. Thank you Panoramic Learning!` },
  { initials: 'GS', name: 'G.S.', text: `Judith and her team are great for learning a new language! I am A2 certified already and wishfully continuing to achieve my goal. So many thanks for your passion, profession and motivating. Panoramic Learning is so much recommended for everyone!` },
  { initials: 'QH', name: 'Q.H.', text: `Judith and her team of tutors offer a well-structured and fun way to learn Dutch. I really enjoy the emphasis on pronunciation and learning the nuances of the language. Judith is passionate about what she does and goes the extra mile to help with various aspects of the integration journey, like finding local social clubs or preparing for interviews. I highly recommend Panoramic Learning!` },
  { initials: 'LJ', name: 'L.J.', text: `Judith and her team are excellent Dutch teachers. I highly recommend Panoramic Learning. I have now been taking online Dutch lessons with Panoramic Learning for about six months and have learned a lot. The lessons have been enjoyable, and I have no doubt that I will soon be able to communicate confidently and even fluently in Dutch.` },
  { initials: 'NJ', name: 'N.J.', text: `Judith and her team at Panoramic Learning have had an incredible impact on my and my fianc\u00e9's new lives in the Netherlands. She has given us an outstanding service as a Dutch language tutor! She is fluent in multiple languages and understands the complex structures around these languages and how they are similar and how they differ. This gives Judith and her team a huge advantage in teaching a lot of people from different parts of the world the Dutch language. Having such an in depth understanding of the languages allows Judith and her team to build a strong foundation for the language, making it easier for one to learn the more advanced language principles as they progress. The Panoramic Learning team are very professional, have high standards and always have your best interests with learning Dutch in mind. As a huge bonus, Judith and her team not only focus on teaching you the Dutch language, but also share and teach a lot of the Dutch culture, history and information on all the really interesting places around the Netherlands! We are extremely happy with the results we have achieved thanks to Judith and her team! I recommend anyone that wants to learn Dutch to go with Panoramic Learning.` },
  { initials: 'JW', name: 'J. v.d.W.', text: `Panoramic Learning has helped me immensely to improve my Dutch. The lessons are fun and the study material is easy to follow. A huge thank you to Panoramic Learning.` },
  { initials: 'DS', name: 'D.S.', text: `Judith is one of the most caring and passionate teachers that I have met. Teaching my wife and I Dutch does not seem like work, but rather the start of a great friendship. She has been available for any questions we had and did not only help us to improve our Dutch. She also helped us understand more about the country, people, and culture. I hope more teachers could be like her. The team she has is also great. We have had a few sessions with some of the other teachers working with her and it was a great experience.` },
  { initials: 'LP', name: 'L. d.P.', text: `Judith is an amazing teacher. She has a lot of passion for teaching, and that shines through when she enthusiastically passes down her knowledge to you. She is a friendly, and caring person that will always seek out the answer to difficult questions that you might have, which is a quality that is not always found in other teachers. She has a lot of drive and pushes you to work or learn as much as possible, whilst making it fun and challenging at the same time. My Dutch has grown in leaps and bounds since I have been taking classes under Judith and I will gladly recommend her and Panoramic Learning any day!` },
  { initials: 'RW', name: 'R. v.d.W.', text: `Judith is an incredible Dutch teacher!!! When I first started, I was nervous to learn a new language. Judith not only is an outstanding Dutch teacher, but she goes above and beyond in her lessons. She is friendly and welcoming, and I would highly recommend Panoramic Learning.` },
  { initials: 'GL', name: 'G.L.', text: `With small steps and great guidance from the Panoramic Learning team this old mind has been able to complete the B2 training. The Spreken, Lezen and Luisteren B2-Staatsexamens flags have been successfully raised. Now to plant the final flag, Schrijven B2-Staatsexamen. A BIG thank you to Judith Siemers, our tutor, and the team at Panoramic Learning for the wonderful guidance and lots of patience. Without you this would not have been possible.` },
  { initials: 'NK', name: 'N. K-L.', text: `My partner and I started our journey to learn Dutch with Panoramic Learning. Being in our late 40s we stressed that it would be very difficult. Judith, our tutor and the team have been amazing and guiding us every step of the way. The classes are interactive, fun and a great way to learn. We passed our Level A2 last night and are excited to continue our journey. Thank you Judith, our tutor and the Panoramic Learning team who has not only been with us every step of the way, but also to support and motivate us. You are a great team, and we have been blessed to be on this journey with you.` },
  { initials: 'GA', name: 'G.A.', text: `Thank you very much for your help in achieving the A2 level in Dutch. For someone who has never been strong in languages, Panoramic Learning has truly given me confidence - feeling thankful.` },
  { initials: 'KM', name: 'K.M.', text: `I highly recommend Judith and her team. They really went out of their way to assist my wife and me with our Dutch course. They work very professionally and treat you with a lot of respect. I would recommend anyone else to take a Dutch course with Panoramic Learning.` },
  { initials: 'CR', name: 'C.R.', text: `We had the pleasure of learning and improving our Dutch with the help of Judith and the other tutors! They were extremely professional and focused on the course and study materials. I would recommend Panoramic Learning to anyone looking to learn Dutch.` },
  { initials: 'RF', name: 'R.F.', text: `Great teachers and the learning material is well structured. We always have a good time learning Dutch with our lecturers and they are always willing to answer any questions we might have and accommodate us. Would gladly recommend Panoramic Learning if you'd like to learn Dutch!` },
  { initials: 'KT', name: 'K.T.', text: `Just completed my A2 and Judith and her team are just awesome.` },
  { initials: 'AB', name: 'A. v.d.B.', text: `Just completed my A2 level thanks to Judith and her amazing team. Next step, getting ready for B1 and the Inburgeringsexamen! I definitely couldn't have done it without Panoramic Learning, always professional and always striving to get their students ahead. Definitely the cr\u00e8me de la cr\u00e8me of Dutch courses.` },
  { initials: 'RK', name: 'R.K.', text: `Receiving Dutch lessons from Panoramic Learning has been a pleasure, both Judith and our tutor are great! All admin is well organized and the lessons are structured. Thank you for your patience with us!` },
  { initials: 'EL', name: 'E. d.L.', text: `Judith, our tutor at Panoramic Learning, was phenomenal! She is very professional but also finds a way that helps to make the learning personal. The course is very well structured. She is patient and kind irrespective of your learning ability. I will recommend this company to anyone. Had a very good experience!` },
  { initials: 'CS', name: 'C.S.', text: `I just love Panoramic Learning! The lessons are laid out well; the online learning material is easy to use and structured properly and the tutors are very knowledgeable and friendly. You are sure to be speaking Dutch with them in no time!` },
  { initials: 'SS', name: 'S.S.', text: `I'm happy to share that my husband and I have officially passed all of our NT2 B2-level Dutch state exams. Thank you, Panoramic Learning!!!` }
];

function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

let shuffledTestimonials = [];
const TRUNCATE_LEN = 180;

function buildTestimonialCard(item, idx) {
  const long  = item.text.length > TRUNCATE_LEN;
  const cutAt = long ? item.text.lastIndexOf(' ', TRUNCATE_LEN) : -1;
  const snippet = long ? item.text.slice(0, cutAt > 0 ? cutAt : TRUNCATE_LEN) : item.text;

  const card = document.createElement('div');
  card.className = 'testimonial-card';

  const stars = document.createElement('div');
  stars.className = 'testimonial-stars';
  stars.textContent = '\u2605\u2605\u2605\u2605\u2605';

  const p = document.createElement('p');
  p.appendChild(document.createTextNode('\u201c' + snippet + (long ? '\u2026' : '\u201d')));

  if (long) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'read-more-btn';
    btn.textContent = 'Read\u00a0more';
    btn.addEventListener('pointerdown', e => e.stopPropagation());
    btn.addEventListener('click', e => {
      e.stopPropagation();
      openTestimonialModal(item);
    });
    p.appendChild(btn);
  }

  const author = document.createElement('div');
  author.className = 'testimonial-author';

  const avatar = document.createElement('div');
  avatar.className = 'author-avatar';
  avatar.textContent = item.initials;

  const nameWrap = document.createElement('div');
  const strong = document.createElement('strong');
  strong.textContent = item.name;
  nameWrap.appendChild(strong);

  author.appendChild(avatar);
  author.appendChild(nameWrap);
  card.appendChild(stars);
  card.appendChild(p);
  card.appendChild(author);
  return card;
}

function getOrCreateModal() {
  let overlay = document.getElementById('tmodal-overlay');
  if (overlay) return overlay;

  overlay = document.createElement('div');
  overlay.id = 'tmodal-overlay';
  overlay.className = 'tmodal-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Full student review');

  const box = document.createElement('div');
  box.className = 'tmodal-box';

  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.className = 'tmodal-close';
  closeBtn.setAttribute('aria-label', 'Close');
  closeBtn.textContent = '\u00d7';

  const mStars = document.createElement('div');
  mStars.className = 'testimonial-stars';
  mStars.textContent = '\u2605\u2605\u2605\u2605\u2605';

  const mText = document.createElement('p');
  mText.className = 'tmodal-text';

  const mAuthor = document.createElement('p');
  mAuthor.className = 'tmodal-author';

  box.appendChild(closeBtn);
  box.appendChild(mStars);
  box.appendChild(mText);
  box.appendChild(mAuthor);
  overlay.appendChild(box);
  document.body.appendChild(overlay);

  closeBtn.addEventListener('click', closeTestimonialModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeTestimonialModal(); });
  return overlay;
}

function openTestimonialModal(item) {
  const overlay = getOrCreateModal();
  overlay.querySelector('.tmodal-text').textContent = '\u201c' + item.text + '\u201d';
  overlay.querySelector('.tmodal-author').textContent = '\u2014 ' + item.name;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  overlay.querySelector('.tmodal-close').focus();
}

function closeTestimonialModal() {
  const overlay = document.getElementById('tmodal-overlay');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeTestimonialModal();
});

// ---- Testimonials carousel ----
const track   = document.getElementById('testimonial-track');
const btnPrev = document.getElementById('tnav-prev');
const btnNext = document.getElementById('tnav-next');

let currentIndex  = 0;
let autoPlayTimer = null;
let isDragging    = false;
let dragStartX    = 0;
let dragDeltaX    = 0;
let totalOriginal = 0;

function renderTestimonials() {
  if (!track) return;
  shuffledTestimonials = shuffleArray(TESTIMONIALS_DATA);
  totalOriginal = shuffledTestimonials.length;
  track.innerHTML = '';

  shuffledTestimonials.forEach((item, idx) => {
    track.appendChild(buildTestimonialCard(item, idx));
  });

  // Duplicate first 3 for seamless loop
  shuffledTestimonials.slice(0, 3).forEach((item, idx) => {
    track.appendChild(buildTestimonialCard(item, idx));
  });

}

renderTestimonials();

// ---- Testimonials full-page grid ----
const reviewsGrid = document.getElementById('reviews-grid');
if (reviewsGrid) {
  function buildReviewCard(item) {
    const card = document.createElement('div');
    card.className = 'review-card';

    const stars = document.createElement('div');
    stars.className = 'review-stars';
    stars.textContent = '\u2605\u2605\u2605\u2605\u2605';

    const text = document.createElement('p');
    text.className = 'review-text';
    text.textContent = '\u201c' + item.text + '\u201d';

    const author = document.createElement('div');
    author.className = 'review-author';

    const avatar = document.createElement('div');
    avatar.className = 'review-avatar';
    avatar.textContent = item.initials;

    const strong = document.createElement('strong');
    strong.textContent = item.name;

    author.appendChild(avatar);
    author.appendChild(strong);
    card.appendChild(stars);
    card.appendChild(text);
    card.appendChild(author);
    return card;
  }

  function getSorted(sort) {
    const arr = TESTIMONIALS_DATA.slice();
    if (sort === 'random')      return shuffleArray(arr);
    if (sort === 'alpha')       return arr.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'length-desc') return arr.sort((a, b) => b.text.length - a.text.length);
    if (sort === 'length-asc')  return arr.sort((a, b) => a.text.length - b.text.length);
    return arr;
  }

  function renderGrid(sort) {
    const sorted = getSorted(sort);
    reviewsGrid.innerHTML = '';
    sorted.forEach(item => reviewsGrid.appendChild(buildReviewCard(item)));
  }

  renderGrid('random');

  document.querySelectorAll('.sort-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGrid(btn.dataset.sort);
    });
  });
}

function getCardWidth() {
  const card = track ? track.querySelector('.testimonial-card') : null;
  if (!card) return 344;
  const style = window.getComputedStyle(track);
  const gap = parseFloat(style.gap) || 24;
  return card.offsetWidth + gap;
}

function goTo(index) {
  if (!track) return;
  const cardW = getCardWidth();
  currentIndex = Math.max(0, Math.min(index, totalOriginal - 1));
  track.style.transform = `translateX(-${currentIndex * cardW}px)`;
}

function next() { goTo(currentIndex + 1); }
function prev() { goTo(currentIndex - 1); }

if (btnNext) btnNext.addEventListener('click', next);
if (btnPrev) btnPrev.addEventListener('click', prev);

if (track) {
  track.addEventListener('pointerdown', e => {
    isDragging = true;
    dragStartX = e.clientX;
    track.setPointerCapture(e.pointerId);
    track.style.transition = 'none';
  });
  track.addEventListener('pointermove', e => {
    if (!isDragging) return;
    dragDeltaX = e.clientX - dragStartX;
    const cardW = getCardWidth();
    track.style.transform = `translateX(${-currentIndex * cardW + dragDeltaX}px)`;
  });
  track.addEventListener('pointerup', () => {
    if (!isDragging) return;
    isDragging = false;
    track.style.transition = '';
    if (dragDeltaX < -60) next();
    else if (dragDeltaX > 60) prev();
    else goTo(currentIndex);
    dragDeltaX = 0;
  });

  function startAutoPlay() {
    autoPlayTimer = setInterval(() => {
      if (currentIndex >= totalOriginal - 1) goTo(0);
      else next();
    }, 2500);
  }
  function stopAutoPlay() { clearInterval(autoPlayTimer); }

  startAutoPlay();
  track.addEventListener('pointerenter', stopAutoPlay);
  track.addEventListener('pointerleave', startAutoPlay);
}

// Recalc on resize
window.addEventListener('resize', () => goTo(currentIndex), { passive: true });

// ---- FAQ accordion ----
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item    = btn.closest('.faq-item');
    const isOpen  = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.faq-item.open').forEach(el => {
      el.classList.remove('open');
      el.querySelector('.faq-question').setAttribute('aria-expanded', false);
    });

    // Open clicked (toggle)
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', true);
    }
  });
});

// ---- Booking form (demo validation) ----
const bookingForm = document.getElementById('booking-form');

if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Only name and email are marked required in the form.
    const nameField  = bookingForm.querySelector('#f-name');
    const emailField = bookingForm.querySelector('#f-email');
    const name  = nameField  ? nameField.value.trim()  : '';
    const email = emailField ? emailField.value.trim() : '';

    if (!name || !email) {
      alert('Please fill in all required fields.');
      return;
    }
    // In production: submits to WP (CF7 / Gravity Forms) then redirects to Mollie
    alert(`Thank you, ${name}! In the live site you'd be redirected to secure payment now.`);
  });
}

// ---- Smooth reveal on scroll (IntersectionObserver) ----
const revealEls = document.querySelectorAll(
  '.course-card, .step, .testimonial-card, .booking-detail, .faq-item, .about-content > *, .section-header'
);

const revealStyle = document.createElement('style');
revealStyle.textContent = `
  .reveal { opacity: 0; transform: translateY(20px); transition: opacity .5s ease, transform .5s ease; }
  .reveal.visible { opacity: 1; transform: none; }
`;
document.head.appendChild(revealStyle);

revealEls.forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

