# Bricks Variable Manager

A powerful web application for managing CSS custom properties (CSS variables) with a focus on design systems and the Bricks WordPress page builder. Organize, edit, and export your design tokens with an intuitive interface.

## Features

### 🎨 Variable Management
- **Visual Interface**: Grid and row view modes for different workflows
- **Color Support**: Built-in color picker with visual swatches
- **Bulk Operations**: Select multiple variables for batch editing and categorization
- **Search & Filter**: Real-time search across variable names and values
- **Drag & Drop**: Reorder variables and categories with intuitive sorting

### 📁 Organization
- **Categories**: Organize variables into custom categories
- **Smart Filtering**: View all variables or filter by specific categories
- **Uncategorized Handling**: Automatic handling of uncategorized variables

### 🔄 Import & Export
- **CSS Import**: Parse existing CSS code to extract custom properties
- **JSON Import/Export**: Bricks-compatible JSON format for seamless integration
- **CSS Export**: Generate clean CSS output for production use
- **Local Storage**: Automatic saving and restoration of your work

### ⚡ User Experience
- **Dark Theme**: Modern dark interface optimized for long coding sessions
- **Responsive Design**: Works across different screen sizes
- **Keyboard Shortcuts**: Efficient workflows with keyboard support
- **Toast Notifications**: Clear feedback for all operations
- **Modal Dialogs**: Streamlined editing and confirmation workflows

## Getting Started

### Quick Start
1. Open `index.html` in your web browser
2. Start by importing existing CSS variables or create new ones manually
3. Organize variables into categories for better management
4. Export your variables as CSS or JSON when ready

### Importing Variables

#### From CSS Code
1. Click "Import from Code"
2. Paste your CSS containing custom properties (`:root { --variable: value; }`)
3. Variables are automatically parsed and added to your collection

#### From Bricks JSON
1. Click "Import JSON" 
2. Upload or drag & drop your Bricks JSON export file
3. Variables are imported with their existing organization

### Creating Variables
1. Click "Add Variable"
2. Enter a name (e.g., `primary-500`, `text-heading`)
3. Set the value (colors, sizes, fonts, etc.)
4. Assign to a category
5. Use the color picker for color values

### Organization Tips
- Create categories like "Colors", "Typography", "Spacing", "Shadows"
- Use consistent naming conventions (e.g., `color-primary-500`)
- Group related variables together for easier management
- Use the search function to quickly find specific variables

## Technical Details

### File Structure
```
├── index.html          # Main application interface
├── app.js             # Core application logic and state management
├── app.css            # Comprehensive styling and theme system
└── README.md          # This documentation
```

### Dependencies
- **SortableJS**: Drag and drop functionality
- **CodeMirror**: Code editor with syntax highlighting
- **Modern Browser**: ES6+ features, CSS Grid, Flexbox

### Browser Support
- Chrome/Edge 88+
- Firefox 85+
- Safari 14+

### Data Storage
- Uses browser localStorage for persistence
- Automatic save/restore on page reload
- Export options for backup and sharing

## CSS Variable Format

The application works with standard CSS custom properties:

```css
:root {
  --primary-500: #3b82f6;
  --text-heading: #1f2937;
  --spacing-lg: 2rem;
  --shadow-card: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

## Bricks Integration

Perfect for Bricks WordPress page builder users:
- Import existing Bricks variable exports
- Export in Bricks-compatible JSON format
- Maintain category organization
- Seamless workflow between design and development

## Advanced Features

### Bulk Operations
- Select multiple variables with checkboxes
- Move variables between categories
- Delete multiple variables at once
- Clear selections with one click

### View Modes
- **Grid View**: Compact cards showing variable details
- **Row View**: List format optimized for reordering

### Search & Filter
- Search by variable name or value
- Results grouped by category
- Real-time filtering as you type

## Contributing

This is a client-side application built with vanilla JavaScript. To contribute:

1. Fork the repository
2. Make your changes
3. Test across different browsers
4. Submit a pull request

## License

Open source - feel free to use, modify, and distribute.

---

**Built for developers who care about organized, maintainable design systems.**