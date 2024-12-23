import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthPopupComponent } from '../authpopup/authpopup.component';
import { ShareComponent } from "../../shared/share/share.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, AuthPopupComponent, ShareComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  activeTab: string = 'website_templates'; // Default active tab

  // Function to change active tab
  selectTab(tab: string): void {
    this.activeTab = tab;
  }
  
  faqs = [
    {
      question: 'How to Create a Website?',
      answer: 'The first question that pops into your mind before you start "Is it easy to create a website?"...',
      showAnswer: false
    },
    {
      question: 'Is It Easy To Create a Website?',
      answer: 'As previously mentioned, it totally depends on the scale and type of your website...',
      showAnswer: false
    },
    {
      question: 'How Do I Create A Website With A Custom Domain?',
      answer: 'An individual brand name that distinguishes a website is known as a custom domain...',
      showAnswer: false
    },
    {
      question: 'Can I Use A Website Builder To Create A Landing Page?',
      answer: 'A standalone web page made especially for marketing or advertising effort is called a landing page...',
      showAnswer: false
    },
    {
      question: 'Why The Joonweb Website Builder Is The Best Choice For You',
      answer: 'In case you are wondering why use the Joonweb Website Builder for creating a website?...',
      showAnswer: false
    }
  ];

  toggleAnswer(index: number): void {
    this.faqs[index].showAnswer = !this.faqs[index].showAnswer;
  }
  steps = [
    {
      icon: '1',
      heading: 'Start Creating A Website',
      description: 'Before you create a website, click on ‘Start Now’ & "Sign-In" if you already have an account. If you don’t have an account, sign-up using your mail.',
    },
    {
      icon: '2',
      heading: 'Choose your Website Type',
      description: 'Select the type of Website you want to create & choose the suitable website category. Add details & put your logo.',
    },
    {
      icon: '3',
      heading: 'Select The Perfect Layout',
      description: 'Choose a suitable layout as per your needs. You can update the design & content anytime if the need arises.',
    },
    {
      icon: '4',
      heading: 'Publish Your Website',
      description: 'Your website is live now. Here you can make suitable changes. Adjust content, add images, videos & much more.',
    },
    {
      icon: '5',
      heading: 'Bring Traffic',
      description: 'Utilize our cutting-edge SEO tools and integrated marketing solutions to bring traction to your site.',
    },
  ];

  imageSrc = 'https://static.joonsite.com/media/steps.svg';
  imageAlt = 'Steps to Create Website';
  websiteTemplates = [
    {
      name: 'Webtemp1',
      image: './images/web1.png',
      previewUrl: '/webtemp1'
    },
    {
      name: 'Webtemp2',
      image: './images/webtemp2.png',
      previewUrl: '/webtemp2'
    },
    // {
    //   name: 'Shopping',
    //   image: './images/shop.png',
    //   previewUrl: 'https://ecommer-jet.vercel.app/'
    // }
  ];

  // Define template data for store templates
  storeTemplates = [
    {
      name: 'Davito Electro',
      image: './images/econ.png',
      previewUrl: 'https://angular-ecom-opal.vercel.app/home'
    }
    // Add more store templates here
  ];
 
}
