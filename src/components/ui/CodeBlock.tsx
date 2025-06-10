import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language = 'javascript', 
  showLineNumbers = false,
  className = ''
}) => {
  const { theme } = useTheme();
  const darkMode = theme === 'dark';

  return (    <div className={`code-block-container ${darkMode ? 'dark' : ''} ${className}`}>
      {language && (
        <div className={`code-language ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-700'} text-xs font-mono px-3 py-1 rounded-t-md`}>
          {language}
        </div>
      )}      <pre
        className={`${
          darkMode 
            ? 'bg-gray-900 text-gray-200 border-gray-800' 
            : 'bg-white text-gray-800 border-gray-200'
        } p-4 rounded-b-md overflow-x-auto border font-mono`}
        style={darkMode ? { textShadow: '0 0.3px 0 rgba(255,255,255,0.05)' } : {}}
      >
        {showLineNumbers ? (
          <div className="flex">
            <div className={`line-numbers text-right pr-4 mr-4 ${darkMode ? 'border-r border-gray-800 text-gray-400' : 'border-r border-gray-200 text-gray-400'}`}>
              {code.split('\n').map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
            <code className={`language-${language}`}>
              {code}
            </code>
          </div>
        ) : (
          <code className={`language-${language}`}>
            {code}
          </code>
        )}
      </pre>
    </div>
  );
};

export default CodeBlock;
