import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'paragraph',
  standalone: true,
})
export class ParagraphPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(text: string): any {
    const paragraphs = text
      .split('\n')
      .filter((paragraph) => paragraph.trim().length > 0);
    const htmlContent = paragraphs
      .map((paragraph) => `<p>${paragraph}</p>`)
      .join('');
    return this.sanitizer.bypassSecurityTrustHtml(htmlContent);
  }
}
