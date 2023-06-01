---
title: Space OP3C
---

![OP3C](/img/OP3C.png#center "OP3C")


# <div align="center" title="Main Title"> Space OP3C </div> 

JFPGA or SW solution for on-board hi-performance
hyperspectral data compression and cloud classification

<br/><br/> 

# On-board Processing 
***for Compression and Clouds Classification***

OP3C compression technique achieves high compression ratios, low data distortion,still keeping a limited computation complexity suitable to the on-board constraints. OP3C compressed data can be further processed in their compressed form. This is a typical characteristic of the class of techniques known as compressed sensing. The OP3C compression methodology is named HUNPCA (Hybrid Un-mixing Principal Component Analysis) and is based on a spectral un-mixing procedure and PCA combined with a coding algorithm. The international patent was granted to Planetek Hellas (EP3347852)

![Comparison](/img/Comparison.png#center "Comparison")

<br/><br/> 

# Capabilities

OP3C can consider the cloud coverage, both at pixel level and as overall coverage percentage, in order to dynamically adapt compression to image content.

![Compression Ratio Graph](/img/CompressionRatioGraph.png#center "Compression Ratio Graph]")

<br/><br/> 

# Deployments

The performances of the OP3C compressor	have been demonstrated on two different sensors: AVIRIS (airborne) and Hyperion
(spaceborne) on the standard dataset (Aaron	et al. 2009) adopted by NASA and CCSDS for hyper-spectral compressor benchmarking

<br/><br/> 			

# Performance

The HUNPCA compression algorithm has been evaluated in terms of data loss according to the similarity metric Spectral Angle Difference (SAD) and the Root Mean Square Error (RMSE). Its performance  is compared with the CCSDS 121.0, 122.0 and 123.0 compressors.

![Performance Table](/img/PerformanceTable.png#center "Performance Table")
		
<br/><br/> 
<br/><br/> 

# HUNPCA applicable sensors:

1. Hyperspectral sensors
2. Imaging spectrometers
3. Sounding (infrared) imaging sensors
4. Adapts to sensor's characteristics: 
the greater the spectral resolution, the higher the compression ratio.
5. Detects clouds and adapts compression. 
By applying the compression algorithm only to the land/sea pixels, the algorithm achieves higher variance description with the same threshold. This feature allows the algorithm to achieve higher compression ratios with better information modeling.
6. Thermal hyperspectral imagers

![Compression Figure](/img/CompressionFigure.png#center "Compression Figure" alt="The figure shows the algorithm's capability to compress the image by removing either the sensor systematic noise or the random noise")

<br/><br/> 

<br/><br/> 

# <div align="center" title="Feature List"> MAIN FEATURES: </div> 

- Achieves high compression ratios without significant information losses (estimated data volume reduction from 12 to 22 times)
- Provides both near-lossless or lossy compression modes upon configuration
- Performs de-noising of the hyper-spectral image bands
- Adapts to sensor's characteristics: the greater the spectral resolution, the higher the compression ratio.
- Detects clouds and adapts compression. By applying the compression algorithm only to the land/sea pixels, the algorithm achieves higher variance description with the same threshold. This feature allows the algorithm to achieve higher compression ratios with better information modeling.
- The algorithm allows data processing in their compressed form, i.e. other processes / workflows can be applied without decompressing the image (e.g. useful for on board classification)