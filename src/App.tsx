import { useState } from 'react';
import { Copy, RotateCcw, Github } from 'lucide-react';

export default function App() {
  const [inputString, setInputString] = useState('');
  const [targetLength, setTargetLength] = useState<number | null>(null);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const validateInput = () => {
    if (!inputString) {
      setError('文字列を入力してください');
      return false;
    }
    if (targetLength === null || targetLength <= 0) {
      setError('文字数は1以上を指定してください');
      return false;
    }
    return true;
  };

  const generateRepeatedString = () => {
    setError('');
    if (!validateInput()) return;

    const length = targetLength as number;
    const repeatCount = Math.ceil(length / inputString.length);
    const repeated = inputString.repeat(repeatCount).substring(0, length);
    setResult(repeated);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setInputString('');
    setTargetLength(null);
    setResult('');
    setError('');
  };

  const handleTargetLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      setTargetLength(null);
    } else {
      const num = parseInt(value);
      if (!isNaN(num)) {
        setTargetLength(num);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">String Repeater</h1>
          
          <div className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                繰り返す文字列
              </label>
              <input
                type="text"
                value={inputString}
                onChange={(e) => setInputString(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="例: TestCode001"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                目標文字数
              </label>
              <input
                type="number"
                value={targetLength ?? ''}
                onChange={handleTargetLengthChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="例: 255"
                min="1"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={generateRepeatedString}
                className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                生成
              </button>
              <button
                onClick={handleReset}
                className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <RotateCcw size={18} />
                リセット
              </button>
            </div>

            {result && (
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    結果 ({result.length}文字)
                  </label>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    <Copy size={16} />
                    {copied ? 'コピーしました！' : 'コピー'}
                  </button>
                </div>
                <textarea
                  value={result}
                  readOnly
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 font-mono text-sm"
                  rows={8}
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 bg-white rounded-lg shadow p-4">
          <h2 className="text-sm font-semibold text-gray-700 mb-2">使い方</h2>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• 繰り返したい文字列と目標文字数を入力</li>
            <li>• 「生成」ボタンをクリックすると、指定した文字数まで文字列が繰り返されます</li>
            <li>• 結果が目標文字数を超える場合は、その長さでカットされます</li>
          </ul>
        </div>

        {/* GitHub Link */}
        <div className="mt-6 flex justify-center">
          <a
            href="https://github.com/twtwtw-gj/string-repeater"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition-colors"
            aria-label="View source on GitHub"
          >
            <Github size={20} />
            <span className="font-medium">View on GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}
