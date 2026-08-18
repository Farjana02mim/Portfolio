import { ResumeData } from '../types';

/**
 * Zero-Dependency Microsoft Word Resume Exporter
 * Generates clean, standard Word format (.doc / .docx compatible)
 * without requiring external npm packages like 'docx' or 'file-saver'.
 */
export async function exportResumeToDocx(data: ResumeData): Promise<void> {
  const emailDisplay = data.email || 'farjanaaktermim330@gmail.com';

  // Contact items
  const contactParts: string[] = [];
  if (data.phone) contactParts.push(`<strong>Phone:</strong> ${data.phone}`);
  if (emailDisplay) contactParts.push(`<strong>Email:</strong> ${emailDisplay}`);
  if (data.linkedin) contactParts.push(`<strong>LinkedIn:</strong> linkedin.com/in/${data.linkedinUsername}`);
  if (data.github) contactParts.push(`<strong>GitHub:</strong> github.com/${data.githubUsername}`);
  if (data.location) contactParts.push(`<strong>Location:</strong> ${data.location}`);

  // Construct standard HTML-Word document string
  const docHtml = `<!DOCTYPE html>
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
  <meta charset="utf-8">
  <title>${data.name} - Resume</title>
  <!--[if gte mso 9]>
  <xml>
    <w:WordDocument>
      <w:View>Print</w:View>
      <w:Zoom>100</w:Zoom>
      <w:DoNotOptimizeForBrowser/>
    </w:WordDocument>
  </xml>
  <![endif]-->
  <style>
    @page {
      size: 8.5in 11in;
      margin: 0.5in 0.5in 0.5in 0.5in;
      mso-header-margin: 0.2in;
      mso-footer-margin: 0.2in;
      mso-paper-source: 0;
    }
    body {
      font-family: Calibri, Arial, Helvetica, sans-serif;
      font-size: 10pt;
      line-height: 1.3;
      color: #111111;
      background-color: #ffffff;
      margin: 0;
      padding: 0;
    }
    h1 {
      font-size: 17pt;
      font-weight: bold;
      text-transform: uppercase;
      color: #000000;
      margin: 0 0 2pt 0;
      letter-spacing: 0.5pt;
    }
    .subtitle {
      font-size: 10pt;
      font-weight: bold;
      color: #333333;
      margin: 0 0 4pt 0;
      text-transform: uppercase;
    }
    .contact-strip {
      font-size: 9pt;
      color: #222222;
      border-bottom: 2pt solid #000000;
      padding-bottom: 4pt;
      margin-bottom: 8pt;
    }
    .section-header {
      font-size: 11pt;
      font-weight: bold;
      text-transform: uppercase;
      color: #000000;
      border-bottom: 1pt solid #222222;
      padding-bottom: 1.5pt;
      margin-top: 9pt;
      margin-bottom: 3pt;
    }
    p {
      margin: 2pt 0;
    }
    ul {
      margin: 2pt 0 4pt 16pt;
      padding: 0;
    }
    li {
      margin-bottom: 2pt;
      font-size: 9.5pt;
      color: #222222;
    }
    .table-layout {
      width: 100%;
      border-collapse: collapse;
      margin: 2pt 0;
    }
    .table-layout td {
      padding: 1pt 0;
      vertical-align: top;
    }
    .bold-title {
      font-weight: bold;
      color: #000000;
    }
    .tech-stack {
      color: #444444;
      font-style: italic;
    }
    .right-align {
      text-align: right;
      font-weight: bold;
      color: #333333;
    }
    .link {
      color: #0055aa;
      text-decoration: underline;
    }
  </style>
</head>
<body>

  <!-- 1. HEADER SECTION -->
  <table class="table-layout" style="margin-bottom: 4pt;">
    <tr>
      <td>
        <h1>${data.name}</h1>
        <div class="subtitle">${data.subtitle || `${data.education.degree} | ${data.education.institution}`}</div>
      </td>
    </tr>
  </table>

  <!-- CONTACT STRIP -->
  <div class="contact-strip">
    ${contactParts.join(' &nbsp;•&nbsp; ')}
  </div>

  <!-- 2. CAREER SUMMARY -->
  <div class="section-header">CAREER SUMMARY</div>
  <p style="text-align: justify; margin-bottom: 6pt;">
    ${data.summary}
  </p>

  <!-- 3. CORE COMPETENCIES & TECHNICAL SKILLS -->
  <div class="section-header">CORE COMPETENCIES &amp; TECHNICAL SKILLS</div>
  <table class="table-layout" style="margin-bottom: 6pt;">
    <tr>
      <td style="width: 25%; font-weight: bold;">• Programming:</td>
      <td>${data.skills.programming.join(', ')}</td>
    </tr>
    <tr>
      <td style="width: 25%; font-weight: bold;">• Frontend Stack:</td>
      <td>${data.skills.frontend.join(', ')}</td>
    </tr>
    <tr>
      <td style="width: 25%; font-weight: bold;">• Backend &amp; DB:</td>
      <td>${data.skills.backend.join(', ')}</td>
    </tr>
    <tr>
      <td style="width: 25%; font-weight: bold;">• ML &amp; Data Tools:</td>
      <td>${data.skills.machineLearning.join(', ')}</td>
    </tr>
    <tr>
      <td style="width: 25%; font-weight: bold;">• Tools &amp; Platforms:</td>
      <td>${data.skills.tools.join(', ')}</td>
    </tr>
    ${
      data.skills.otherAreas && data.skills.otherAreas.length > 0
        ? `<tr>
      <td style="width: 25%; font-weight: bold;">• Specialized Areas:</td>
      <td>${data.skills.otherAreas.slice(0, 8).join(', ')}</td>
    </tr>`
        : ''
    }
  </table>

  <!-- 4. EDUCATION -->
  <div class="section-header">EDUCATION</div>
  <table class="table-layout" style="margin-bottom: 2pt;">
    <tr>
      <td>
        <span class="bold-title">${data.education.degree}</span> — ${data.education.institution}
      </td>
      <td class="right-align" style="width: 30%;">
        ${data.education.period}
      </td>
    </tr>
  </table>
  <p style="margin-left: 10pt; margin-bottom: 6pt;">
    <strong>Department:</strong> ${data.education.department} &nbsp;|&nbsp; <strong>CGPA:</strong> ${data.education.cgpa}
  </p>

  <!-- 5. ACADEMIC ACHIEVEMENTS & SCHOLARSHIPS -->
  ${
    data.academicAchievements && data.academicAchievements.length > 0
      ? `
  <div class="section-header">ACADEMIC ACHIEVEMENTS &amp; SCHOLARSHIPS</div>
  <ul>
    ${data.academicAchievements
      .map(
        (ach) => `<li>
      <strong>${ach.title}</strong>${ach.date ? ` (${ach.date})` : ''}${ach.organization ? ` — <em>${ach.organization}</em>: ` : ': '}
      ${ach.description}
    </li>`
      )
      .join('')}
  </ul>
  `
      : ''
  }

  <!-- 6. ACADEMIC & SOFTWARE PROJECTS -->
  <div class="section-header">ACADEMIC &amp; SOFTWARE PROJECTS</div>
  ${data.projects
    .map((proj) => {
      const linkParts: string[] = [];
      if (proj.liveUrl) {
        linkParts.push(`<a class="link" href="${proj.liveUrl}">Live Demo</a>`);
      }
      if (proj.githubClientUrl) {
        linkParts.push(`<a class="link" href="${proj.githubClientUrl}">Client Repo</a>`);
      }
      if (proj.githubServerUrl) {
        linkParts.push(`<a class="link" href="${proj.githubServerUrl}">Server Repo</a>`);
      }
      if (!proj.githubClientUrl && !proj.githubServerUrl && proj.githubUrl) {
        linkParts.push(`<a class="link" href="${proj.githubUrl}">GitHub Repo</a>`);
      }

      return `
    <table class="table-layout" style="margin-top: 4pt;">
      <tr>
        <td>
          <span class="bold-title">${proj.name}</span>
          <span class="tech-stack">[${proj.technologies.join(', ')}]</span>
        </td>
        <td class="right-align" style="font-size: 8.5pt;">
          ${linkParts.join(' &nbsp;|&nbsp; ')}
        </td>
      </tr>
    </table>
    <ul>
      ${
        proj.bulletPoints && proj.bulletPoints.length > 0
          ? proj.bulletPoints.map((bp) => `<li>${bp}</li>`).join('')
          : `<li>${proj.description}</li>`
      }
    </ul>
    `;
    })
    .join('')}

  <!-- 7. TRAINING & CERTIFICATIONS -->
  ${
    data.certifications && data.certifications.length > 0
      ? `
  <div class="section-header">TRAINING &amp; CERTIFICATIONS</div>
  <ul>
    ${data.certifications
      .map(
        (cert) => `<li>
      <strong>${cert.name}</strong>${cert.issuer ? ` — ${cert.issuer}` : ''}${cert.date ? ` (${cert.date})` : ''}
      ${cert.url ? ` | <a class="link" href="${cert.url}">Verify Certificate</a>` : ''}
      ${cert.description ? `<br><span style="color: #444444; margin-left: 8pt;">- ${cert.description}</span>` : ''}
    </li>`
      )
      .join('')}
  </ul>
  `
      : ''
  }

  <!-- 8. EXTRA-CURRICULAR & COMPETITIONS -->
  ${
    data.extraCurricular && data.extraCurricular.length > 0
      ? `
  <div class="section-header">EXTRA-CURRICULAR PARTICIPATION &amp; COMPETITIONS</div>
  <ul>
    ${data.extraCurricular
      .map(
        (item) => `<li>
      <strong>${item.title}</strong>${item.organization ? ` — ${item.organization}` : ''}${item.date ? ` (${item.date})` : ''}
    </li>`
      )
      .join('')}
  </ul>
  `
      : ''
  }

  <!-- 9. RELEVANT COURSEWORK -->
  ${
    data.coursework && data.coursework.length > 0
      ? `
  <div class="section-header">RELEVANT COURSEWORK</div>
  <p style="margin-left: 6pt; margin-bottom: 6pt;">
    ${data.coursework.join(' &nbsp;•&nbsp; ')}
  </p>
  `
      : ''
  }

  <!-- 10. REFERENCES -->
  ${
    data.references && data.references.length > 0
      ? `
  <div class="section-header">REFERENCES</div>
  <table class="table-layout" style="margin-bottom: 6pt;">
    <tr>
      ${data.references
        .map(
          (ref) => `<td style="width: 50%;">
        <strong>${ref.name}</strong><br>
        <span style="color: #333333;">${ref.title}, ${ref.institution}</span><br>
        <span style="color: #555555; font-size: 8.5pt;">${ref.email || ''} ${ref.phone ? `| ${ref.phone}` : ''}</span>
      </td>`
        )
        .join('')}
    </tr>
  </table>
  `
      : ''
  }

</body>
</html>`;

  // Create standard Blob with Word MIME type and UTF-8 BOM
  const blob = new Blob(['\ufeff', docHtml], {
    type: 'application/msword;charset=utf-8',
  });

  const url = URL.createObjectURL(blob);
  const downloadAnchor = document.createElement('a');
  downloadAnchor.href = url;
  downloadAnchor.download = 'Farjana_Akter_Mim_Resume.doc';
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  document.body.removeChild(downloadAnchor);
  URL.revokeObjectURL(url);
}
