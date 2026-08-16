import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  BrainCircuit, 
  CloudRain, 
  Sun, 
  Wind, 
  Droplets, 
  Gauge, 
  Sliders, 
  CheckCircle2, 
  Binary, 
  Cpu, 
  Activity, 
  ArrowRight,
  Sparkles,
  BarChart3,
  HelpCircle,
  Zap,
  Layers,
  Compass,
  CloudSun
} from 'lucide-react';
import { mlTopics } from '../data/portfolioData';

interface MachineLearningProps {
  isDark: boolean;
}

export function MachineLearning({ isDark }: MachineLearningProps) {
  // Interactive Simulation State for Rainfall Classifier
  const [humidity, setHumidity] = useState<number>(78);
  const [temperature, setTemperature] = useState<number>(24);
  const [windSpeed, setWindSpeed] = useState<number>(26);
  const [sunshine, setSunshine] = useState<number>(2.5);
  const [pressure, setPressure] = useState<number>(1006);
  const [selectedModel, setSelectedModel] = useState<'rf' | 'lr'>('rf');

  // Weather presets for quick 1-click recruiter evaluation
  const setPreset = (preset: 'rain' | 'sun' | 'edge') => {
    if (preset === 'rain') {
      setHumidity(86);
      setSunshine(1.0);
      setPressure(1002);
      setWindSpeed(34);
    } else if (preset === 'sun') {
      setHumidity(38);
      setSunshine(10.5);
      setPressure(1019);
      setWindSpeed(12);
    } else {
      setHumidity(58);
      setSunshine(5.5);
      setPressure(1012);
      setWindSpeed(20);
    }
  };

  // Realistic synthetic classification calculation simulating trained ML model weights
  const prediction = useMemo(() => {
    const z = 
      (humidity - 50) * 0.048 +
      (1013 - pressure) * 0.052 +
      (windSpeed - 15) * 0.032 -
      (sunshine - 6) * 0.28 +
      (selectedModel === 'rf' ? 0.18 : 0.06);

    const prob = 1 / (1 + Math.exp(-z));
    const percentage = Math.min(Math.max(Math.round(prob * 100), 4), 98);
    const willRain = percentage >= 50;

    // Simulated Confusion Matrix based on probability
    const totalSamples = 1000;
    const tp = Math.round(percentage * 4.5);
    const fp = Math.round((100 - percentage) * 0.45);
    const fn = Math.round(percentage * 0.55);
    const tn = Math.round((100 - percentage) * 4.5);

    return {
      percentage,
      willRain,
      confidence: Math.abs(percentage - 50) * 2,
      tpr: selectedModel === 'rf' ? '88.4%' : '82.1%',
      accuracy: selectedModel === 'rf' ? '89.6%' : '84.2%',
      f1Score: selectedModel === 'rf' ? '0.88' : '0.82',
      matrix: { tp, fp, fn, tn }
    };
  }, [humidity, temperature, windSpeed, sunshine, pressure, selectedModel]);

  return (
    <section
      id="machine-learning"
      className={`py-24 lg:py-32 relative overflow-hidden ${
        isDark ? 'text-slate-100' : 'text-slate-900'
      }`}
    >
      {/* Visual Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/15 text-purple-300 border border-purple-500/30 backdrop-blur-md">
            <BrainCircuit size={14} className="text-purple-400" />
            <span>Currently Exploring Machine Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-display">
            Machine Learning Projects & Coursework
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Hands-on machine learning projects, coursework experiments, and data science workflows exploring predictive models and evaluation metrics.
          </p>
        </motion.div>

        {/* Featured Showcase Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className={`mb-16 rounded-3xl border shadow-2xl overflow-hidden backdrop-blur-2xl ${
            isDark 
              ? 'bg-slate-950/85 border-purple-500/30 shadow-purple-950/30' 
              : 'bg-white border-slate-200 shadow-xl'
          }`}
        >
          {/* Banner Header */}
          <div className={`p-6 sm:p-8 border-b ${
            isDark 
              ? 'bg-gradient-to-r from-purple-950/50 via-slate-900/90 to-blue-950/50 border-slate-800' 
              : 'bg-gradient-to-r from-purple-50 via-white to-blue-50 border-slate-200'
          }`}>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40">
                    Interactive ML Lab
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/20 text-blue-300 border border-blue-500/40">
                    Python • Scikit-Learn • Pandas
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight">
                  Rainfall Prediction Classifier
                </h3>
                <p className={`text-xs sm:text-sm mt-1.5 max-w-2xl leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  Supervised binary classification pipeline leveraging meteorology sensor features. Features automated StandardScaling, hyperparameter tuning via GridSearchCV, confusion matrix diagnostic calculation, and True Positive Rate (TPR) maximization.
                </p>
              </div>

              {/* Quick Preset Selector & Algorithm Toggle */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                
                {/* Algorithm Switcher */}
                <div className="flex items-center gap-1 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800">
                  <button
                    onClick={() => setSelectedModel('rf')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      selectedModel === 'rf'
                        ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Random Forest
                  </button>
                  <button
                    onClick={() => setSelectedModel('lr')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      selectedModel === 'lr'
                        ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Logistic Regression
                  </button>
                </div>

              </div>
            </div>

            {/* Quick Test Scenarios */}
            <div className="mt-4 pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-400 font-mono">Quick Scenarios:</span>
              <button
                onClick={() => setPreset('rain')}
                className="px-2.5 py-1 rounded-lg bg-blue-500/15 hover:bg-blue-500/25 text-blue-300 border border-blue-500/30 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <CloudRain size={12} />
                <span>Heavy Rain Scenario</span>
              </button>
              <button
                onClick={() => setPreset('sun')}
                className="px-2.5 py-1 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Sun size={12} />
                <span>Clear Sky Scenario</span>
              </button>
              <button
                onClick={() => setPreset('edge')}
                className="px-2.5 py-1 rounded-lg bg-purple-500/15 hover:bg-purple-500/25 text-purple-300 border border-purple-500/30 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <CloudSun size={12} />
                <span>Overcast Edge Case</span>
              </button>
            </div>
          </div>

          {/* Interactive ML Simulator Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8">
            
            {/* Left Column: Feature Controls / Parameter Sliders */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider flex items-center gap-2 font-mono text-purple-400">
                  <Sliders size={15} />
                  <span>Meteorological Input Vector (X)</span>
                </h4>
                <span className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Real-time Feature Adjustment
                </span>
              </div>

              <div className="space-y-3.5">
                {/* Humidity Slider */}
                <div className={`p-4 rounded-2xl border transition-all ${
                  isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex justify-between items-center text-xs mb-2">
                    <span className="font-semibold flex items-center gap-2">
                      <Droplets size={15} className="text-cyan-400" />
                      Relative Humidity (3pm)
                    </span>
                    <span className="font-mono font-bold text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                      {humidity}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={humidity}
                    onChange={(e) => setHumidity(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                </div>

                {/* Sunshine Duration Slider */}
                <div className={`p-4 rounded-2xl border transition-all ${
                  isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex justify-between items-center text-xs mb-2">
                    <span className="font-semibold flex items-center gap-2">
                      <Sun size={15} className="text-amber-400" />
                      Daily Sunshine Duration
                    </span>
                    <span className="font-mono font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
                      {sunshine} hrs
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="14"
                    step="0.5"
                    value={sunshine}
                    onChange={(e) => setSunshine(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  />
                </div>

                {/* Atmospheric Pressure */}
                <div className={`p-4 rounded-2xl border transition-all ${
                  isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex justify-between items-center text-xs mb-2">
                    <span className="font-semibold flex items-center gap-2">
                      <Gauge size={15} className="text-purple-400" />
                      Atmospheric Pressure (3pm)
                    </span>
                    <span className="font-mono font-bold text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30">
                      {pressure} hPa
                    </span>
                  </div>
                  <input
                    type="range"
                    min="990"
                    max="1035"
                    value={pressure}
                    onChange={(e) => setPressure(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
                  />
                </div>

                {/* Wind Speed */}
                <div className={`p-4 rounded-2xl border transition-all ${
                  isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex justify-between items-center text-xs mb-2">
                    <span className="font-semibold flex items-center gap-2">
                      <Wind size={15} className="text-blue-400" />
                      Max Wind Gust Speed
                    </span>
                    <span className="font-mono font-bold text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-500/30">
                      {windSpeed} km/h
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="65"
                    value={windSpeed}
                    onChange={(e) => setWindSpeed(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-400"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Live Model Output & Diagnostic Matrix */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              
              {/* Classification Output Box */}
              <div className={`p-6 sm:p-7 rounded-3xl border text-center relative overflow-hidden backdrop-blur-xl transition-all duration-300 ${
                prediction.willRain
                  ? 'bg-gradient-to-b from-blue-950/80 to-slate-950 border-blue-500/50 shadow-xl shadow-blue-950/40'
                  : 'bg-gradient-to-b from-amber-950/40 to-slate-950 border-amber-500/40 shadow-xl shadow-amber-950/20'
              }`}>
                <div className="flex justify-center mb-3">
                  {prediction.willRain ? (
                    <div className="p-3.5 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/40 animate-pulse">
                      <CloudRain size={40} />
                    </div>
                  ) : (
                    <div className="p-3.5 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/40">
                      <Sun size={40} />
                    </div>
                  )}
                </div>

                <span className="text-[11px] uppercase tracking-widest text-slate-400 font-mono font-bold">
                  Inference Verdict:
                </span>
                
                <h4 className={`text-2xl sm:text-3xl font-extrabold font-display my-1.5 ${
                  prediction.willRain ? 'text-blue-400' : 'text-amber-400'
                }`}>
                  {prediction.willRain ? 'Rainfall Likely (Positive)' : 'No Rain Expected (Negative)'}
                </h4>

                <div className="mt-2 flex items-center justify-center gap-2 font-mono text-xs">
                  <span className="text-slate-400">Sigmoid Probability:</span>
                  <span className="font-bold text-white text-base">{prediction.percentage}%</span>
                </div>

                {/* Probability Bar */}
                <div className="w-full bg-slate-800/80 h-2.5 rounded-full mt-3 overflow-hidden border border-slate-700">
                  <div
                    className={`h-full transition-all duration-300 ${
                      prediction.willRain ? 'bg-gradient-to-r from-blue-500 to-cyan-400' : 'bg-gradient-to-r from-amber-500 to-yellow-400'
                    }`}
                    style={{ width: `${prediction.percentage}%` }}
                  />
                </div>
              </div>

              {/* Model Diagnostics Card */}
              <div className={`p-5 rounded-3xl border ${
                isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <h5 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-3 flex items-center justify-between font-mono">
                  <span className="flex items-center gap-1.5">
                    <BarChart3 size={14} />
                    <span>Benchmark Metrics</span>
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {selectedModel === 'rf' ? 'Random Forest' : 'Logistic Regression'}
                  </span>
                </h5>

                <div className="grid grid-cols-3 gap-2.5 text-xs font-mono text-center">
                  <div className="p-2.5 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Recall (TPR)</span>
                    <span className="text-emerald-400 font-bold text-sm">{prediction.tpr}</span>
                  </div>

                  <div className="p-2.5 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Test Accuracy</span>
                    <span className="text-blue-400 font-bold text-sm">{prediction.accuracy}</span>
                  </div>

                  <div className="p-2.5 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">F1-Score</span>
                    <span className="text-purple-400 font-bold text-sm">{prediction.f1Score}</span>
                  </div>
                </div>

                <div className="mt-3 p-2.5 rounded-xl bg-purple-950/30 border border-purple-500/20 text-[11px] leading-relaxed text-purple-200">
                  Formula: <span className="font-mono text-purple-300 font-bold">TPR = TP / (TP + FN)</span> ensures high sensitivity to precipitation events.
                </div>
              </div>

            </div>

          </div>

          {/* Workflow Pipeline Steps */}
          <div className={`p-6 sm:p-8 border-t ${
            isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-100/60 border-slate-200'
          }`}>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 font-mono">
              End-to-End Machine Learning Pipeline Architecture
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  step: '01',
                  name: 'Data Preprocessing',
                  desc: 'Handling missing values, outlier pruning, and StandardScaling of numerical weather features.'
                },
                {
                  step: '02',
                  name: 'Feature Engineering',
                  desc: 'Correlation heatmaps, mutual info scoring, and lag variable synthesis for predictive signals.'
                },
                {
                  step: '03',
                  name: 'Model Optimization',
                  desc: 'GridSearchCV hyperparameter tuning for max_depth, n_estimators, and regularized C penalties.'
                },
                {
                  step: '04',
                  name: 'Diagnostic Evaluation',
                  desc: 'Confusion Matrix calculation, True Positive Rate (Sensitivity), Precision-Recall, and ROC-AUC curves.'
                }
              ].map((stage) => (
                <div
                  key={stage.step}
                  className={`p-4 rounded-2xl border backdrop-blur-md ${
                    isDark ? 'bg-slate-900/60 border-slate-800/80' : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-md border border-purple-500/20">
                      {stage.step}
                    </span>
                    <span className="text-xs font-bold font-display">{stage.name}</span>
                  </div>
                  <p className={`text-[11px] leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {stage.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </motion.div>

        {/* Machine Learning Concepts & Core Knowledge Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight">
              Machine Learning Concepts & Methodologies
            </h3>
            <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Theoretical foundation and practical implementation across classical learning paradigms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {mlTopics.map((concept, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`p-6 rounded-3xl border backdrop-blur-xl transition-all ${
                  isDark
                    ? 'bg-slate-950/80 border-slate-800/80 hover:border-purple-500/40 shadow-lg shadow-black/20'
                    : 'bg-white border-slate-200 hover:border-purple-300 shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                    concept.category === 'Supervised' 
                      ? 'bg-blue-500/15 text-blue-300 border-blue-500/30'
                      : concept.category === 'Evaluation'
                        ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                        : concept.category === 'Pipeline'
                          ? 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                          : 'bg-purple-500/15 text-purple-300 border-purple-500/30'
                  }`}>
                    {concept.category}
                  </span>
                </div>

                <h4 className="text-base font-bold mb-2 font-display">{concept.name}</h4>
                
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {concept.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
