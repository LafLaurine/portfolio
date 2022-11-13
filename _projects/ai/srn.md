---
name: Scale Recurrent Network for video deblurring
tools: [Python, PyTorch]
image: /assets/images/SRN.jpg
description: Scale recurrent network use case on video deblurring.
type: AI
---

![preview](/assets/images/SRN.jpg)

<p>In collaboration with <a href="https://github.com/guillaume-haerinck" target="_blank">Guillaume Haerinck</a></p>

We studied the paper Scale-recurrent Network for Deep Image Deblurring by X. Tao, H. Gao, Y. Wang, X. Shen, J. Wang and J. Jia. We implemented our own CNN to deblur video and we compared its performance against SRN.

We wrote a [paper](/assets/file/SRN_deblur.pdf), where we have selected a few of the best ranked neural networks in terms of their average PSNR and SSIM for the GoPro and related dataset. The Scale Recurrent Neural network (SRN) being both open source and still in the top list, we focused our attention on its structure and performance while still covering key points of other papers.

<p class="text-center">
{% include elements/button.html link="https://github.com/IMAC-projects/SRN-Deblurring-PyTorch" text="Check the source code" %}
</p>


