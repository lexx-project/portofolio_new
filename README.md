<div align="center">

# 🖥️ ARCHITECT_OS PORTFOLIO

![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**Personal Portfolio Website dengan tema Operating System Futuristik**

_Terminal-inspired UI • Scanline Effects • Modern Design_

</div>

---

## 📋 Deskripsi

**ARCHITECT_OS** adalah website portfolio personal yang dirancang dengan estetika antarmuka sistem operasi futuristik. Menggunakan elemen desain seperti efek scanline, tipografi terminal, dan visual yang terinspirasi dari komputer retro-futuristik untuk menciptakan pengalaman yang unik dan memorable.

## ✨ Fitur

- 🎨 **Desain Terminal-Style** - UI dengan tema sistem operasi dan efek CRT/scanline
- 📱 **Fully Responsive** - Tampilan optimal di semua ukuran layar
- ⚡ **Fast Performance** - Dibangun dengan Vite untuk loading super cepat
- 🧩 **Component-Based** - Arsitektur React modular yang mudah dikembangkan
- 🎯 **TypeScript** - Type-safe code untuk maintainability yang lebih baik

## 🏗️ Struktur Project

```
architect_os-portfolio/
├── components/
│   ├── Header.tsx      # Navigasi utama
│   ├── Hero.tsx        # Section pembuka dengan animasi
│   ├── About.tsx       # Informasi personal/CORE_LOGIC
│   ├── TechStack.tsx   # Daftar teknologi/ENGINE_ROOM
│   ├── Projects.tsx    # Showcase project/MODULES
│   ├── Contact.tsx     # Form kontak/UPLINK
│   ├── Footer.tsx      # Footer website
│   └── ui/             # Komponen UI reusable
├── App.tsx             # Root component
├── index.tsx           # Entry point
├── constants.ts        # Data projects & tech stack
├── types.ts            # TypeScript interfaces
└── index.html          # HTML template
```

## 🚀 Menjalankan Project

### Prerequisites

- **Node.js** (v18 atau lebih baru)
- **npm** atau **yarn**

### Instalasi

```bash
# Clone repository
git clone https://github.com/[username]/architect_os-portfolio.git

# Masuk ke direktori
cd architect_os-portfolio

# Install dependencies
npm install
```

### Development

```bash
# Jalankan development server
npm run dev
```

Buka browser dan akses `http://localhost:5173`

### Production Build

```bash
# Build untuk production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

| Teknologi      | Keterangan                             |
| -------------- | -------------------------------------- |
| **React 19**   | Library UI modern dengan fitur terbaru |
| **TypeScript** | Type-safe JavaScript                   |
| **Vite**       | Build tool dan dev server super cepat  |
| **CSS3**       | Styling dengan efek visual modern      |

## 📂 Projects yang Ditampilkan

### 1. Halaqah Management System

> Sistem manajemen halaqah digital dengan arsitektur RESTful API

- PostgreSQL Database
- Express.js Backend
- Automated Attendance Engine

### 2. WhatsApp Automation Bot

> Bot automasi WhatsApp untuk handling high-volume messaging

- Node.js Runtime
- Baileys Library
- Session Persistence Module

## 🎨 Customization

Untuk mengubah data projects dan tech stack, edit file `constants.ts`:

```typescript
// Tambah project baru
export const PROJECTS: Project[] = [
  {
    id: "project-id",
    title: "PROJECT NAME",
    category: "CATEGORY",
    description: "Deskripsi project...",
    tags: ["TAG_1", "TAG_2"],
    features: ["FEATURE_1", "FEATURE_2"],
    refId: "REF_ID: XXX-XX-X",
    icon: "icon_name",
  },
];
```

## 📄 License

MIT License - Silakan gunakan dan modifikasi sesuai kebutuhan.

---

<div align="center">

**SYSTEM STATUS: ONLINE** 🟢

_Built with ❤️ using React + TypeScript_

</div>
