import { Component } from '@angular/core';
import { AuthPopupComponent } from '../../authpopup/authpopup.component';
import { CommonModule } from '@angular/common';
import { ShareComponent } from '../../../shared/share/share.component';

@Component({
  selector: 'app-web',
  standalone: true,
  imports: [AuthPopupComponent,CommonModule,ShareComponent],
  templateUrl: './web.component.html',
  styleUrl: './web.component.scss'
})
export class WebComponent {
  faqs = [
    {
      question: 'How easy is it to create a website at JoonWeb website builder?',
      answer: 'Users rate it "Easiest". JoonWeb.com offers the easiest way to create your own website. Answer a few simple questions, and you can have a professional website in minutes.'
    },
    {
      question: 'Is coding required to create a website at JoonWeb?',
      answer: 'Absolutely not. JoonWeb is user-friendly and helps you build your website without knowing coding. If you know coding, it adds extra flexibility.'
    },
    {
      question: 'How can I optimize my site for SEO at JoonWeb website builder?',
      answer: 'JoonWeb provides auto-SEO features and supports custom domains, which help your site appear in search results faster.'
    },
    {
      question: 'How to make my site mobile-friendly?',
      answer: 'JoonWeb automatically creates a mobile-optimized version of your site, making it perfect for any device.'
    },
    {
      question: 'Can I create a free website with a custom domain?',
      answer: 'You can create a free website with JoonWeb subdomain. For a professional look, opt for a cost-friendly custom domain.'
    },
    {
      question: 'Can I make changes to my website later?',
      answer: 'Yes, JoonWeb allows you to manage and update your website anytime and anywhere.'
    },
    {
      question: 'Will hosting cost extra charges?',
      answer: 'No. JoonWeb provides free hosting with secure and fast servers.'
    },
    {
      question: 'How can I optimize my site for SEO at JoonWeb?',
      answer: 'JoonWeb provides built-in SEO tools, Google integration, and options to customize meta tags, URLs, and more.'
    }
  ];
  features = [
    {
      image: 'https://static.joonsite.com/media/JW_2401161643128927.png',
      category: 'SEO TOOLS',
      title: 'Drive traffic to your website using our built-in SEO tools',
      description: 'Use our website builder\'s SEO tools to create an SEO-optimized website. Here you can make use of free SEO tools to increase traffic to your mobile-friendly website.'
    },
    {
      image: 'https://static.joonsite.com/media/JW_2401161725025582.png',
      category: 'SSL CERTIFICATE',
      title: 'Protect your website through free SSL certificate',
      description: 'JoonWeb website builder will make sure that its every website is safe from cyber-attacks. Every JoonWeb website includes SSL / HTTPS encryption.'
    },
    {
      image: 'https://static.joonsite.com/media/JW_2401161512207326.png',
      category: 'CUSTOM COLORS AND FONTS',
      title: 'Give a stylish look to your website',
      description: 'Use the best free custom color & fonts available and give your website a special look. Start browsing now.'
    },
    {
      image: 'https://static.joonsite.com/media/JW_2401161523377119.png',
      category: 'CUSTOM DOMAINS',
      title: 'Get a unique custom domain & create your brand',
      description: 'With a free domain registration, you can establish your online identity. With the purchase of an annual package, JoonWeb provides a free custom domain.'
    },
    {
      image: 'https://static.joonsite.com/media/JW_2401161524358685.png',
      category: 'RESPONSIVE DESIGNS',
      title: 'Create mobile-friendly websites with better user-experience',
      description: 'With a mobile-friendly website, you can generate more foot traffic for your clients. Using our website builder, you can provide step-by-step guidance to site visitors right on the site.'
    }
  ];
  steps = [
    {
      number: 1,
      heading: 'START BUILDING A WEBSITE',
      description: `Click on ‘Try For Now’ or 'Sign-In' if you already have an account. 
                    If you don’t have an account, sign-up using your mail.`
    },
    {
      number: 2,
      heading: 'CHOOSE THE WEBSITE TYPE YOU WANT TO CREATE',
      description: `Choose your Website Type as a Website or Online Store. 
                    Name your website & choose a suitable category for your website.`
    },
    {
      number: 3,
      heading: 'SELECT THE PERFECT FONT & COLOR',
      description: `Choose suitable font & color as per your needs. 
                    You can update the design & content anytime if the need arises.`
    },
    {
      number: 4,
      heading: 'PUBLISH YOUR NEW WEBSITE',
      description: `The website is live now. Here you can make suitable changes. 
                    Adjust content, add images, videos & much more.`
    },
    {
      number: 5,
      heading: 'BRING TRAFFIC',
      description: `Utilize our cutting-edge SEO tools and integrated marketing solutions 
                    to bring traction to your site.`
    }
  ];

  stepImage = 'https://static.joonsite.com/media/JW_2401161534135652.png';
  
  templates = [
    {
      name: 'Webtemp1',
      imgSrc: './images/web1.png',
      previewLink: '/webtemp1'
    },
    {
      name: 'Webtemp1',
      imgSrc: './images/web2.png',
      previewLink: '/webtemp2'
    },
    // {
    //   name: 'Fashion Clothes',
    //   imgSrc: 'https://static.joonsite.com/theme/theme-listing/174/2411131054208825.png',
    //   previewLink: 'https://www.joonweb.com/templates/detail/fashion-clothes',
    // }
  ];
  

}
