/* eslint-disable */
export const PERSON = {
  name: {
    first: '戴',
    middle: '',
    last: '辉',
  },
  about: '学习物理，喜欢文学，爱好阅读摄影的一枚乐观的悲观主义青年',
  position: '求职职位： 算法工程师/机器学习',
  birth: {
    year: 1990,
    location: '湖南'
  },
  experience: [{
      company: '基于量子科学实验卫星的时频传输实验',
      position: '主要负责人',
      timeperiod: '2017.03 - 至今',
      description: '利用量子科学实验卫星的同步光系统展开超高精度自由空间时频传输实验。主要负责人和实施者。'
    },
    {
      company: '基于量子科学实验卫星的纠缠分发实验',
      position: '主要实验员',
      timeperiod: '2016.06 - 2017.02',
      description: '实现千公里级别的量子纠缠分发，首次在如此规模尺度上验证了贝尔不等式破缺。负责光路调节、数据采集与维护，成果发表于Science封面文章。'
    },
    {
      company: 'RRDPS密钥分发实验',
      position: '主要实验员',
      timeperiod: '2014.06 - 2015.04',
      description: '首批实现RRDPS方案的实验之一，拓展了目前的量子密钥分发对误码噪声的容忍度。负责调研方案、光路搭建、数据采集与处理，成果发表于Physical Review A'
    },
    {
      company: '远距离白天量子密钥分发实验',
      position: '实验员',
      timeperiod: '2013.06 - 2013.12',
      description: '实现目前最长距离的白天密钥分发，突破以往QKD只能在夜晚工作的局限。负责发射端日常实验与维护，成果发表于Nature Photonics'
    }
  ],
  education: [{
      degree: '博士',
      timeperiod: '2012.09 - 2018.06',
      description: '量子信息物理学, 微尺度物质科学国家实验室, 中国科学技术大学 ',
      course: '主修课程：量子物理，量子通信以及量子计算等基础理论以及实验，研究领域方向为量子密钥分发以及时频传输'
    },
    {
      degree: '学士',
      timeperiod: '2008.09 - 2012.06',
      description: '光信息科学与技术, 理学院, 南京理工大学',
      course: '主修课程：四大力学，计算机程序设计（C++）、激光物理、信息光学、模拟电路、数字电路以及信号处理等'
    }
  ],
  // skill level goes 0 to 100
  skills: [
    {
        name: 'Research',
        level: '80'
    },
    {
        name: 'Data Analysis',
        level: '70'
    },
    {
      name: 'Python',
      level: '70'
    },
    {
      name: 'C++',
      level: '40'
    },
    {
      name: 'Java',
      level: '40'
    },
    {
      name: 'Mathematica',
      level: '45'
    },
    {
      name: 'Matlab',
      level: '40'
    }
  ],
  skillDescription: '熟悉量子计算与量子通信、量子密钥分发、时间频率传输等物理领域的理论以及实验; 拥有专业调研能力，能够迅速切入新的领域; 具备良好的数据处理与Python科学计算编程能力，目前正在关注和学习人工智能。',
  contact: {
    email: 'levitan@msn.cn',
    phone: '+86 18616500410',
    street: '浦东新区秀浦路99号中国科学技术大学上海研究院',
    city: '上海',
    github: 'daihui'
  },
  lang: 'cn' // en, de, fr, pt, cn, it
};
