// @ts-ignore
// import texturePath from './asset/mixed/a-3d-heart-by-echart/canyon.hdr'
const sin = Math.sin;
const cos = Math.cos;
const pow = Math.pow;
const abs = Math.abs;
const  PI = Math.PI;
export const option : any = {
  tooltip: {},
  visualMap: {
    show: false,
    dimension: 2,
    min: -5,
    max: 5,
    inRange: {
      color: [
        '#313695',
        '#4575b4',
        '#74add1',
        '#abd9e9',
        '#e0f3f8',
        '#ffffbf',
        '#fee090',
        '#fdae61',
        '#f46d43',
        '#d73027',
        '#a50026'
      ]
    }
  },
  xAxis3D: {},
  yAxis3D: {},
  zAxis3D: {},
  grid3D: {
    show: false,
    postEffect: {
      enable: false,
      // SSAO: {
      //   enable: true,
      //   radius: 4,
      //   quality: 'high',
      //   intensity: 1.5
      // }
    },
    temporalSuperSampling: {
      enable: true
    },
    light: {
      main: {
        intensity: 2,
        shadow: true
      },
      ambient: {
        intensity: 0
      },
      ambientCubemap: {
        texture: '/asset/mixed/a-3d-heart-by-echart/canyon.hdr',
        exposure: 2,
        diffuseIntensity: 0.2,
        specularIntensity: 3
      }
    },
    
    viewControl:{
      autoRotate: true,
      autoRotateSpeed :20
    },
  },
  series: [
    {
      type: 'surface',
      parametric: true,
      silent: true,
      wireframe: {
        show: false
      },
      shading: 'realistic',
      realisticMaterial: {
        roughness: 0.2,
        metalness: 1
      },
      parametricEquation: {
        u: {
          min: -PI,
          max: PI,
          step: 0.05
        },
        v: {
          min: -0.4,
          max: 0.4,
          step: 0.05
        },
        y: (u: number, v: number) => {
          return 3.2 * pow(sin(u),3) + v * cos(u/2.0) * cos(u)
        },
        z: (u: number, v: number) => {
          return  2.6 * cos(u) - cos(2*u) - 0.6 * cos(3 * u) - 0.2 * cos(4 * u) + v * cos(u/2.0) * sin(u)
        },
        x: (u: number, v: number) => {
          return 1.6 * sin(u) * pow((1 - abs(-u/PI)), 2) + v * sin(-u/2.0)
        }
      }
    }
  ]
};