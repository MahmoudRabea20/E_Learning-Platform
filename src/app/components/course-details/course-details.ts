import { Component, OnInit, Input, ViewChild , ElementRef } from '@angular/core';
// import * as AOS from '../../../../node_modules/aos';
// import AOS from '../../../../node_modules/aos';
import 'aos/dist/aos.css';
import { CommonModule } from '@angular/common';
import { Quiz } from "../quiz/quiz";
import { Assigment } from "../assigment/assigment";
import { PDFService } from '../../services/pdfservice';



interface LessonData {
  id: string;
  title: string;
  videoTitle: string;
  overview: string;
  resourses: string;
  [key: string]: any;


}
@Component({
  selector: 'app-course-details',
  imports: [CommonModule, Quiz, Assigment],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css'
})
export class CourseDetails implements OnInit {

  @Input() currentLesson: string = 'html';

  ngOnInit(): void {
    // AOS.init();
  }
constructor(private PDFService: PDFService) {

  }


  currentTab: string = 'overview';


  resourses: { [key: string]: LessonData } = {
    html: {
      id: 'html',
      title: 'Lesson 1: Carbohydrates & Lipids',
      videoTitle: 'Learning HTML - Introduction',
      overview: `
        <h3 class="fw-bold mb-4">Course Overview</h3>
        <p>Welcome to the <strong>Learning HTML</strong> lesson. This comprehensive course will teach you the fundamentals of HTML and help you build a solid foundation for web development.</p>
        <ul>
          <li>HTML document structure and syntax</li>
          <li>Essential HTML tags and elements</li>
          <li>Forms, tables, and multimedia elements</li>
          <li>Semantic HTML and accessibility best practices</li>
          <li>Modern HTML5 features and APIs</li>
        </ul>
        <p><strong>Estimated completion time:</strong> 2 hours</p>
      `,
      resourses: `
        <h3 class="fw-bold mb-4">Lesson Content</h3>
        <ul>
          <li>Introduction to HTML</li>
          <li>HTML Document Structure</li>
          <li>Common HTML Tags</li>
        </ul>
      `
    },
    css: {
      id: 'css',
      title: 'Lesson 2 : Proteins & Nucleic Acids',
      videoTitle: 'Learning CSS - Styling Fundamentals',
      overview: `
        <h3 class="fw-bold mb-4">Course Overview</h3>
        <p>Welcome to the <strong>Learning CSS</strong> lesson. This course will teach you how to style web pages and create beautiful, responsive designs.</p>
        <ul>
          <li>CSS selectors and properties</li>
          <li>Layout techniques with Flexbox and Grid</li>
          <li>Responsive design principles</li>
        </ul>
        <p><strong>Estimated completion time:</strong> 2 hours</p>
      `,
      resourses: `
        <h3 class="fw-bold mb-4">Lesson Content</h3>
        <ul>
          <li>CSS Basics</li>
          <li>Colors and Typography</li>
        </ul>
      `
    }
    ,
    javascript: {
      id: 'javascript',
      title: 'Lesson 3: Metabolism & Enzymes',
      videoTitle: 'Learning JavaScript - Programming Essentials',
      overview: `
        <h3 class="fw-bold mb-4">Course Overview</h3>
        <p>Welcome to the <strong>Learning JavaScript</strong> lesson. This course will introduce you to programming concepts and help you build interactive web pages.</p>
        <ul>
          <li>JavaScript syntax and variables</li>
          <li>Functions and control flow</li>
          <li>DOM manipulation</li>
          <li>Events and user interaction</li>
        </ul>
        <p><strong>Estimated completion time:</strong> 2 hours</p>
      `,
      resourses: `
        <h3 class="fw-bold mb-4">Lesson Content</h3>
        <ul>
          <li>JavaScript Basics</li>
          <li>Functions and Loops</li>
          <li>DOM Manipulation</li>
        </ul>
      `
    },
    design: {
      id: 'design',
      title: 'Lesson 1: Cell Theory & Microscopy',
      videoTitle: 'UI/UX Design - Getting Started',
      overview: `
        <h3 class="fw-bold mb-4">Course Overview</h3>
        <p>Learn the fundamentals of UI/UX design and how to create user-friendly interfaces.</p>
        <ul>
          <li>Principles of design</li>
          <li>User experience basics</li>
          <li>Wireframing and prototyping</li>
        </ul>
        <p><strong>Estimated completion time:</strong> 1.5 hours</p>
      `,
      resourses:
`
        <h3 class="fw-bold mb-4">Lesson Content</h3>
        <ul>
          <li>Design Principles</li>
          <li>Wireframes</li>
          <li>Prototyping</li>
        </ul>

      `
    },
    figma: {
      id: 'figma',
      title: 'Lesson 2: Cell Ultrastructure (Plant vs. Animal Cells)',
      videoTitle: 'Figma - Design Tool Basics',
      overview: `
        <h3 class="fw-bold mb-4">Course Overview</h3>
        <p>Discover how to use Figma for designing and prototyping interfaces.</p>
        <ul>
          <li>Figma workspace overview</li>
          <li>Basic tools and features</li>
          <li>Collaboration in Figma</li>
        </ul>
        <p><strong>Estimated completion time:</strong> 1 hour</p>
      `,
      resourses: `
        <h3 class="fw-bold mb-4">Lesson Content</h3>
        <ul>
          <li>Getting Started with Figma</li>
          <li>Designing in Figma</li>
          <li>Prototyping in Figma</li>
        </ul>
      `,

    },
    bonus: {
      id: 'bonus',
      title: 'Lesson 1: Cell Differentiation and Tissues (Plant & Animal)',
      videoTitle: 'Advanced Web Development Tips',
      overview: `
        <h3 class="mb-4">Course Overview</h3>
        <p>Explore advanced techniques and best practices for web development.</p>
        <ul>
          <li>Performance optimization</li>
          <li>Accessibility improvements</li>
          <li>Modern tooling</li>
        </ul>
        <p><strong>Estimated completion time:</strong> 1 hour</p>
      `,
      resourses: `
        <h3 class="mb-4">Lesson Content</h3>
        <ul>
          <li>Optimization Techniques</li>
          <li>Accessibility Tips</li>
          <li>Tooling Overview</li>
        </ul>
      `,

    },
bonus2: {
      id: 'bonus2',
      title: 'Lesson 2: Chromosomes and Genetic Materia',
      videoTitle: 'Advanced Web Development Tips',
      overview: `
        <h3 class="mb-4">Course Overview</h3>
        <p>Explore advanced techniques and best practices for web development.</p>
        <ul>
          <li>Performance optimization</li>
          <li>Accessibility improvements</li>
          <li>Modern tooling</li>
        </ul>
        <p><strong>Estimated completion time:</strong> 1 hour</p>
      `,
      resourses: `
      `
    }
  ,  quiz: {
      id: 'quiz',
      title: 'lesson 1: Principles of Taxonomy and Binomial Nomenclature',
      videoTitle: 'Course Quiz & Assessment',
      overview: `
        <h3 class="mb-4">Course Overview</h3>
        <p>Test your knowledge and skills with a final assessment quiz.</p>
        <ul>
          <li>Multiple choice quiz</li>
          <li>Practical exercises</li>
        </ul>
        <p><strong>Estimated completion time:</strong> 30 minutes</p>
      `,
      resourses: `
        <h3 class="mb-4">Quiz Content</h3>
        <ul>
          <li>Quiz Instructions</li>
          <li>Sample quiz</li>
        </ul>
      `
    },
bonus3: {
      id: 'bonus3',
      title: 'Lesson 3: Chromosomes and Genetic Materia',
      videoTitle: 'Advanced Web Development Tips',
      overview: `
        <h3 class="mb-4">Course Overview</h3>
        <p>Explore advanced techniques and best practices for web development.</p>
        <ul>
          <li>Performance optimization</li>
          <li>Accessibility improvements</li>
          <li>Modern tooling</li>
        </ul>
        <p><strong>Estimated completion time:</strong> 1 hour</p>
      `,
      resourses: `
        <h3 class="mb-4">Lesson Content</h3>
        <ul>
          <li>Optimization Techniques</li>
          <li>Accessibility Tips</li>
          <li>Tooling Overview</li>
        </ul>
      `
    }
  ,
    quiz2: {
      id: 'quiz2',
      title: 'Lesson 2 : Mendelian Genetics and Blood Groups',
      videoTitle: 'Course Quiz 2 & Assessment',
      overview: `
        <h3 class="mb-4">Course Overview</h3>
        <p>Test your knowledge and skills with a final assessment quiz.</p>
        <ul>
          <li>Multiple choice quiz</li>
          <li>Practical exercises</li>
        </ul>
        <p><strong>Estimated completion time:</strong> 30 minutes</p>
      `,
      resourses: `
        <h3 class="mb-4">Lesson2 Content</h3>
        <ul>
          <li>Quiz Instructions</li>
          <li>Sample quiz</li>
        </ul>
      `
    },

    quiz3: {
      id: 'quiz3',
      title: 'lesson 3: Genetic Disorders & Human Genome Project',
      videoTitle: 'Course Quiz & Assessment',
      overview: `
        <h3 class="mb-4">Course Overview</h3>
        <p>Test your knowledge and skills with a final assessment quiz.</p>
        <ul>
          <li>Multiple choice quiz</li>
          <li>Practical exercises</li>
        </ul>
        <p><strong>Estimated completion time:</strong> 30 minutes</p>
      `,
      resourses: `
        <h3 class="mb-4">Quiz Content</h3>
        <ul>
          <li>Quiz Instructions</li>
          <li>Sample quiz</li>
        </ul>
      `
    },
    Five1: {
      id: 'Five1',
      title: 'Lesson 1 : Principles of Taxonomy and Binomial Nomenclature',
      videoTitle: 'Lession 1',
      overview: `
        <h3 class="mb-4">Course Overview</h3>
        <p>Test your knowledge and skills with a final assessment quiz.</p>
        <ul>
          <li>Multiple choice quiz</li>
          <li>Practical exercises</li>
        </ul>
        <p><strong>Estimated completion time:</strong> 30 minutes</p>
      `,
      resourses: `
        <h3 class="mb-4">Quiz Content</h3>
        <ul>
          <li>Quiz Instructions</li>
          <li>Sample quiz</li>
        </ul>
      `
    },

   Five2 : {
      id: 'Five2',
      title: '  Lesson 2 : Animal Kingdom: Invertebrates and Vertebrates',
      videoTitle: 'Course Quiz & Assessment',
      overview: `
        <h3 class="mb-4 fw-bold" >Course Overview</h3>
        <p>Test your knowledge and skills with a final assessment quiz.</p>
        <ul>
          <li>Multiple choice quiz</li>
          <li>Practical exercises</li>
        </ul>
        <p><strong>Estimated completion time:</strong> 30 minutes</p>
      `,
      resourses: `
        <h3 class="mb-4">Quiz Content</h3>
        <ul>
          <li>Quiz Instructions</li>
          <li>Sample quiz</li>
        </ul>
      `
    },
    Five3: {
      id: 'Five3',
      title: 'lesson 3: Principles of Taxonomy and Binomial Nomenclature',
      videoTitle: 'Course Quiz & Assessment',
      overview: `
        <h3 class="mb-4">Course Overview</h3>
        <p>Test your knowledge and skills with a final assessment quiz.</p>
        <ul>
          <li>Multiple choice quiz</li>
          <li>Practical exercises</li>
        </ul>
        <p><strong>Estimated completion time:</strong> 30 minutes</p>
      `,
      resourses: `
        <h3 class="mb-4">Quiz Content</h3>
        <ul>
          <li>Quiz Instructions</li>
          <li>Sample quiz</li>
        </ul>
      `
    }

  };








  get currentLessonData(): LessonData {
    return this.resourses
    [this.currentLesson];
  }

  setLesson(lessonId: string) {
    this.currentLesson = lessonId;
    this.currentTab = 'overview';
  }

  // Switch tab
  setTab(tab: string) {
    this.currentTab = tab;
  }
  onDownload() {
  const fileUrl = 'https://drive.google.com/uc?export=download&id=1u64QJPg7tXjUjtYqfAVL7eaCQmSyLAli';
  this.PDFService.downloadFromUrl(fileUrl, 'resourses-result.pdf');
}


}
