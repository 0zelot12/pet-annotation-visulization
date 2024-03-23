import { AnnotationResult } from "./App";

export const annotationResult: AnnotationResult = {
  "name": "doc-10.1",
  "tokens": [
    "The",
    "MPON",
    "sents",
    "the",
    "dismissal",
    "to",
    "the",
    "MPOO",
    ".",
    "The",
    "MPOO",
    "reviews",
    "the",
    "dismissal",
    ".",
    "The",
    "MPOO",
    "opposes",
    "the",
    "dismissal",
    "of",
    "MPON",
    "or",
    "the",
    "MPOO",
    "confirmes",
    "the",
    "dismissal",
    "of",
    "the",
    "MPON",
    "."
  ],
  "recognizedEntities": [
    {
      "type": "ACTOR",
      "startIndex": 1,
      "tokens": [
        "MPON"
      ]
    },
    {
      "type": "ACTOR",
      "startIndex": 6,
      "tokens": [
        "the",
        "MPOO"
      ]
    },
    {
      "type": "ACTOR",
      "startIndex": 10,
      "tokens": [
        "MPOO"
      ]
    },
    {
      "type": "ACTIVITY",
      "startIndex": 11,
      "tokens": [
        "reviews"
      ]
    },
    {
      "type": "ACTOR",
      "startIndex": 16,
      "tokens": [
        "MPOO"
      ]
    },
    {
      "type": "ACTIVITY",
      "startIndex": 17,
      "tokens": [
        "opposes"
      ]
    },
    {
      "type": "ACTIVITY_DATA",
      "startIndex": 21,
      "tokens": [
        "MPON"
      ]
    },
    {
      "type": "ACTOR",
      "startIndex": 24,
      "tokens": [
        "MPOO"
      ]
    },
    {
      "type": "ACTIVITY",
      "startIndex": 25,
      "tokens": [
        "confirmes"
      ]
    }
  ],
  "presentEntities": [
    {
      "type": "ACTOR",
      "startIndex": 0,
      "tokens": [
        "The",
        "MPON"
      ]
    },
    {
      "type": "ACTIVITY",
      "startIndex": 2,
      "tokens": [
        "sents"
      ]
    },
    {
      "type": "ACTIVITY_DATA",
      "startIndex": 3,
      "tokens": [
        "the",
        "dismissal"
      ]
    },
    {
      "type": "ACTOR",
      "startIndex": 6,
      "tokens": [
        "the",
        "MPOO"
      ]
    },
    {
      "type": "ACTOR",
      "startIndex": 9,
      "tokens": [
        "The",
        "MPOO"
      ]
    },
    {
      "type": "ACTIVITY",
      "startIndex": 11,
      "tokens": [
        "reviews"
      ]
    },
    {
      "type": "ACTIVITY_DATA",
      "startIndex": 12,
      "tokens": [
        "the",
        "dismissal"
      ]
    },
    {
      "type": "ACTOR",
      "startIndex": 15,
      "tokens": [
        "The",
        "MPOO"
      ]
    },
    {
      "type": "ACTIVITY",
      "startIndex": 17,
      "tokens": [
        "opposes"
      ]
    },
    {
      "type": "ACTIVITY_DATA",
      "startIndex": 18,
      "tokens": [
        "the",
        "dismissal"
      ]
    },
    {
      "type": "ACTOR",
      "startIndex": 23,
      "tokens": [
        "the",
        "MPOO"
      ]
    },
    {
      "type": "ACTIVITY",
      "startIndex": 25,
      "tokens": [
        "confirmes"
      ]
    },
    {
      "type": "ACTIVITY_DATA",
      "startIndex": 26,
      "tokens": [
        "the",
        "dismissal"
      ]
    }
  ]
}