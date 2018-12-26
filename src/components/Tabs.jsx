import React from 'react';

export default ({option1, option2, option3}) => (
  <div>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">{option1}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">{option2}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">{option3}</a>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Option 1:Dummy Info</div>
      <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Option 2:Dummy Info</div>
      <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">Option 3:Dummy Info</div>
    </div>
  </div>
);