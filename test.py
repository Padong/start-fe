import cv2

import numpy as np

img = np.zeros((350, 250, 3))

print(img)
print(img.shape)

cv2.imshow('Before', img)

img[200:250, :] = [255, 255, 255]
img[:, 100:150] = [255, 0, 1]

cv2.imshow('After', img)

cv2.waitKey(0)
cv2.destroyAllWindows()