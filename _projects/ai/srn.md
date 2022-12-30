---
name: Scale Recurrent Network for video deblurring
tools: [Python, PyTorch]
image: ../assets/images/SRN.jpg
description: Scale recurrent network use case on video deblurring.
type: AI
---

![SRN](../../assets/images/srn_deblur.png)

<p>In collaboration with <a href="https://github.com/guillaume-haerinck" target="_blank">Guillaume Haerinck</a></p>

Video deblurring is a heavily researched topic that has seen further improvements with the introduction of machine learning. That's why we decided to focus on this topic for this project. The study focuses on motion blur.

We studied the paper <a href="https://openaccess.thecvf.com/content_cvpr_2018/papers/Tao_Scale-Recurrent_Network_for_CVPR_2018_paper.pdf" target="_blank">Scale-recurrent Network for Deep Image Deblurring by X. Tao, H. Gao, Y. Wang, X. Shen, J. Wang and J. Jia.</a>

We implemented our own CNN and an auto encoder to deblur videos and we compared its performance against SRN.

We wrote a <a href="../../assets/file/SRN_deblur.pdf" target="_blank">paper</a>, where we have selected a few of the best ranked neural networks in terms of their average PSNR and SSIM for the GoPro and related dataset. The Scale Recurrent Neural network (SRN) being both open source and still in the top list, we focused our attention on its structure and performance while still covering key points of other papers. We also present our own results.

<p class="text-center">
{% include elements/button.html link="https://github.com/IMAC-projects/SRN-Deblurring-PyTorch" text="Check the source code" %}
</p>


