# AutoProctor: A website for proctoring online exams using Deep Learning.
This website proctors online google forms based exams, via the students webcam.
## Working
<ul>
  <li> A pretrained object detection ML algorithm from Tensorflow.js captures presence of a person (student), books and mobile phones in the webcam feed.
  <li> If a book or mobile phone is present, or more that one person is detected, a warning is thrown for each respectively.
  <li> If no person is present, corresponding warning is thrown, via a toast.
  <li> If any of the above warnings stack upto 3 times, the exam is terminated and student is routed back to the home screen.
  <li> The exam page opens in fullscreen mode, and escaping fullscreen also terminates the exam.
</ul>

All above measures help in proctoring students, without human intervention.
