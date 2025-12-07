import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class AppComponent {
  services = signal<Service[]>([
    {
      icon: 'shield-check',
      title: '滲透測試服務',
      description: '模擬駭客攻擊，深入挖掘您系統與應用程式的潛在漏洞，提供詳盡的修補建議，防患於未然。'
    },
    {
      icon: 'code-bracket',
      title: '源碼安全檢測',
      description: '從開發源頭把關，檢測原始碼中的安全缺陷與邏輯漏洞，確保您的軟體產品具備天生的安全基因。'
    },
    {
      icon: 'user-group',
      title: '專業資安顧問',
      description: '提供客製化的資安策略規劃、合規性評估與架構設計，成為您最信賴的資安技術夥伴。'
    },
    {
      icon: 'academic-cap',
      title: '企業教育訓練',
      description: '為您的團隊量身打造資安意識與實戰技術課程，全面提升組織的資安防禦能力與文化。'
    }
  ]);

  isMenuOpen = signal(false);
  currentYear = new Date().getFullYear();

  toggleMenu(): void {
    this.isMenuOpen.update(value => !value);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
