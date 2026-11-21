# 黎曼猜想导览手册 — 严格中文术语表

本术语表用于统一 `index.html`、`technical.html`、`sources.html` 及前端脚本（`assets/app.js`、`assets/counters.js`）中所有数学、数论、自守形式、算术几何与形式化验证术语的中文译法。Lean 代码标识符（如 `UpperTheory.EveryCharacter`、`critLine`、`VWin`、`TopG` 等）及 `sources.html` 中的 Lean 源码摘录均保持原样。

## 1. 解析数论与复分析

| 英文术语 | 严格中文译名 | 备注 |
| --- | --- | --- |
| Riemann hypothesis (RH) | 黎曼猜想（RH） | 缩写保留 RH |
| Dirichlet GRH | 狄利克雷广义黎曼猜想 | 仅指狄利克雷 $L$-函数族 |
| Riemann zeta function / zeta function | 黎曼 $\zeta$ 函数 / $\zeta$ 函数 | 公式中保留 $\zeta(s)$ |
| Dirichlet L-function | 狄利克雷 $L$-函数 | |
| Dirichlet character | 狄利克雷特征 | |
| principal character | 主特征 | |
| nonprincipal character | 非主特征 | |
| primitive character | 本原特征 | 与“非本原特征”严格对称 |
| imprimitive character | 非本原特征 | |
| inverse character | 逆特征 | $\chi^{-1}$ |
| quadratic character | 二次特征 | |
| parity (even / odd character) | 奇偶性（偶特征 / 奇特征） | |
| modulus / moduli | 模 / 模数 | |
| units (in $(\mathbb Z/q\mathbb Z)^\times$) | 可逆元 | 不可译为“单位”或“单位元” |
| conductor | 导子 | |
| index (of a subgroup / sublattice) | 指标 | 不可译为“指数” |
| critical strip / open strip | 临界带 / 开临界带 | $0 < \operatorname{Re} s < 1$ |
| critical line | 临界线 | $\operatorname{Re} s = 1/2$ |
| right half-plane / positive half-plane | 右半平面 / 正半平面 | |
| trivial zero / nontrivial zero | 平凡零点 / 非平凡零点 | |
| off-line zero | 临界线外零点 | |
| candidate zero / hypothetical zero | 候选零点 / 假设零点 | |
| reflected zero | 反射零点 | |
| nonvanishing / zero-free region | 非零性 / 无零点区域 | |
| analytic continuation | 解析延拓 | |
| meromorphic / holomorphic / entire function | 亚纯函数 / 全纯函数 / 整函数 | |
| simple pole / double pole / removable singularity | 单极点 / 二阶极点 / 可去奇点 | |
| residue | 留数 | |
| logarithmic derivative | 对数导数 | |
| Laurent expansion | 洛朗展开 | |
| Cauchy's derivative estimate | 柯西导数估计 | |
| Euler product / Euler factor | 欧拉乘积 / 欧拉因子 | |
| Euler's constant | 欧拉常数 | $\gamma_E$ |
| completed L-function | 完备 $L$-函数 | $\Lambda(s,\chi)$ |
| gamma factor / gamma function | $\Gamma$ 因子 / $\Gamma$ 函数 | |
| root number | 根数 | $\varepsilon(\chi)$ |
| functional equation | 函数方程 | |
| von Mangoldt function | 冯·曼戈尔特函数 | $\Lambda_{\mathrm{vM}}(n)$ |
| explicit formula | 显式公式 | |
| prime-counting function | 素数计数函数 | |
| Laplace transform / Mellin transform | 拉普拉斯变换 / 梅林变换 | |
| majorant | 优函数 | |
| kernel (integral) | 核函数 / 核 | |
| smoothed prime sum / prime-sum error | 光滑素数和 / 素数和误差 | |
| ramp | 斜坡权重 / 斜坡函数 | $(t)_+ = \max(t,0)$ |
| power window / window | 幂窗口 / 窗口 | |
| one-sided bound | 单侧界 | |
| Landau argument / windowed Landau criterion | 朗道论证 / 窗口朗道判别法 | |

## 2. 代数数论、伽罗瓦上同调与表示论

| 英文术语 | 严格中文译名 | 备注 |
| --- | --- | --- |
| number field | 数域 | |
| cyclotomic field / cyclotomic subfield | 分圆域 / 分圆子域 | |
| CM field | CM 域 | |
| totally real field / totally imaginary quadratic extension | 全实域 / 全虚二次扩张 | |
| algebraic closure | 代数闭包 | |
| place (finite / infinite / exceptional) | 素位（有限素位 / 无穷素位 / 例外素位） | |
| unramified / ramified / ramification index | 非分歧 / 分歧 / 分歧指数 | |
| inertia subgroup / decomposition group | 惯性子群 / 分解群 | |
| Frobenius / Frobenius coset | 弗罗贝尼乌斯 / 弗罗贝尼乌斯陪集 | |
| absolute Galois group | 绝对伽罗瓦群 | |
| Galois representation | 伽罗瓦表示 | |
| Galois cohomology | 伽罗瓦上同调 | |
| localization kernel | 局部化核 | |
| Tate–Shafarevich-like localization kernel | 类泰特–沙法列维奇局部化核 | |
| cocycle / coboundary | 上循环 / 上边缘 | |
| Tate twist / twist / twist cutoff | 泰特扭转 / 扭转 / 扭转截断 | |
| cyclotomic character | 分圆特征 | |
| torsion class | 挠类 | |
| module length / normalized length | 模长度 / 归一化长度 | |
| composition series | 合成列 | |
| short exact sequence | 短正合列 | |
| discrete valuation ring | 离散赋值环 | |
| cotangent module / deformation ring | 余切模 / 形变环 | |
| Poitou–Tate duality / local Tate duality | 普瓦图–泰特对偶 / 局部泰特对偶 | |
| semisimple / irreducible | 半单 / 不可约 | |
| characteristic polynomial / trace | 特征多项式 / 迹 | |
| Weil–Deligne parameter | 韦伊–德利涅参数 | |
| Weil group | 韦伊群 | |
| monodromy operator | 单值算子 | |
| infinitesimal character | 无穷小特征 | |
| crystalline / de Rham / potentially semistable | 晶体的 / 德拉姆的 / 潜在半稳定的 | |
| local Artin map | 局部阿廷映射 | |
| local Langlands parameters / local correspondence | 局部朗兰兹参数 / 局部对应 | |
| Langlands multisegment / multisegment | 朗兰兹多线段 / 多线段 | |
| cuspidal support | 尖点支集 | |
| central character | 中心特征 | |
| root discriminant | 根判别式 | |

## 3. 自守形式、$\theta$ 对应与算术几何

| 英文术语 | 严格中文译名 | 备注 |
| --- | --- | --- |
| automorphic form / automorphic representation | 自守形式 / 自守表示 | |
| regular algebraic, polarized cuspidal automorphic representation | 正则代数极化尖点自守表示 | |
| base change | 基变换 | |
| unitary group | 酉群 | |
| Hermitian / skew space | 埃尔米特空间 / 斜埃尔米特空间 | |
| Weil representation | 韦伊表示 | |
| theta integral / theta sum / theta lift / theta matching | $\theta$ 积分 / $\theta$ 和 / $\theta$ 提升 / $\theta$ 匹配 | |
| seesaw construction | 跷跷板构造 | |
| test function / test vector / vacuum vector | 测试函数 / 测试向量 / 真空向量 | |
| evaluation grid | 求值网格 | |
| Fourier coefficient / finite Fourier inversion | 傅里叶系数 / 有限傅里叶反演 | |
| period / period map / CM-period | 周期 / 周期映射 / CM 周期 | |
| Hilbert–Schmidt norm | 希尔伯特–施密特范数 | |
| lattice / integral lattice | 格 / 整格 | |
| covolume / logarithmic covolume | 余体积 / 对数余体积 | |
| Gram matrix | 格拉姆矩阵 | |
| slope / mean slope / maximal slope / slope filtration | 斜率 / 平均斜率 / 最大斜率 / 斜率滤过 | |
| arithmetic degree / geometric degree | 算术次数 / 几何次数 | |
| height / height allowance / height budget | 高度 / 高度容差 / 高度预算 | |
| arithmetic geometry | 算术几何 | |
| resolution of singularities in characteristic zero | 零特征奇点消解 | |
| principalization | 主理想化 | |
| functional condition | 泛函条件 | 不可译为“函数条件” |
| toroidal compactifications of Siegel varieties | 西格尔簇的环面紧化 | |
| Hodge bundle | 霍奇丛 | |
| arithmetic Hilbert–Samuel | 算术希尔伯特–塞缪尔 | |
| Moriwaki's bigness theorem | 森胁大性定理 | |
| Kawamata–Viehweg and Nadel vanishing | 川又–菲韦格与纳德尔消没定理 | |
| Grothendieck–Messing | 格罗滕迪克–梅辛 | |
| prismatic Dieudonné theory | 棱柱迪厄多内理论 | |
| Jacquet–Shalika | 雅凯–沙利卡 | |
| Clozel's purity | 克洛泽尔纯性 | |
| Bernstein–Zelevinsky | 伯恩斯坦–泽列文斯基 | |
| main theorem of complex multiplication | 复乘主定理 | |
| Deligne–Ribet | 德利涅–里贝特 | |
| jet | 射流 | |
| formal power series | 形式幂级数 | |
| additive valuation | 加法赋值 | |
| forward differences | 前向差分 | |

## 4. 站点与形式化验证术语

| 英文术语 | 严格中文译名 | 备注 |
| --- | --- | --- |
| Riemann, line by line | 逐行细读黎曼猜想 | 站点主标题 |
| A mathematical field guide | 数学导览手册 | 副标题 |
| Overview | 概览 | 导航栏 |
| Proof map | 证明路线图 | 导航栏 |
| Technical notes / technical companion | 技术笔记 / 技术伴读 | 导航栏 |
| Sources / source companion | 源码 / 源码伴读 | 导航栏 |
| provenance | 溯源 | |
| archive | 归档 | |
| snapshot / snapshot fingerprint | 快照 / 快照指纹 | |
| conditional deduction | 条件推导 | |
| arithmetic window | 算术窗口 | |
| host / host construction | 宿主 / 宿主构造 | |
| arithmetic budget | 算术预算 | |
| contract (dependency contract) | 接口契约 / 契约 | |
| Levent Alpöge / Alpöge | Levent Alpöge / Alpöge | 当代作者保留原名 |
| Alexis Plascencia | Alexis Plascencia | 站点作者保留原名 |
